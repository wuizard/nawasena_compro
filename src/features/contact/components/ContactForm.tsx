"use client";

import { Button, FieldError, Form, Input, Label, TextArea, TextField } from "@heroui/react";
import { Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import {
  buildMailtoUrl,
  buildWhatsAppUrl,
  isEmailConfigured,
  isWhatsAppConfigured,
} from "@/config/contact";
import { useCopy } from "@/features/i18n";
import { WhatsAppIcon } from "@/shared/components/icons";
import { contactContent } from "../content";
import { composeInquiry, validateInquiry, type InquiryFields } from "../lib/composeInquiry";

type Channel = "whatsapp" | "email";

const EMPTY: InquiryFields = { name: "", email: "", company: "", message: "" };

const fieldClass = "w-full";
const inputClass =
  "!border-white/10 !bg-white/[0.04] !text-white placeholder:!text-white/30 hover:!border-white/20 focus:!border-brand-blue";
const labelClass = "text-sm text-white/70";

export function ContactForm() {
  const copy = useCopy(contactContent);
  const [fields, setFields] = useState<InquiryFields>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const errors = validateInquiry(fields);
  const hasErrors = errors.name || errors.email || errors.message;
  const set = (key: keyof InquiryFields) => (value: string) => setFields((prev) => ({ ...prev, [key]: value }));

  const send = (channel: Channel) => {
    setSubmitted(true);
    if (hasErrors) return;

    const body = composeInquiry(fields, copy.greeting, copy.messageLabels);
    const url = channel === "whatsapp" ? buildWhatsAppUrl(body) : buildMailtoUrl(copy.emailSubject, body);
    if (channel === "whatsapp") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isWhatsAppConfigured) send("whatsapp");
    else if (isEmailConfigured) send("email");
  };

  return (
    <Form onSubmit={onSubmit} className="flex flex-col gap-5" validationBehavior="aria">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          className={fieldClass}
          name="name"
          isRequired
          value={fields.name}
          onChange={set("name")}
          isInvalid={submitted && errors.name}
        >
          <Label className={labelClass}>{copy.fields.name}</Label>
          <Input className={inputClass} placeholder={copy.placeholders.name} autoComplete="name" />
          <FieldError>{copy.errors.name}</FieldError>
        </TextField>

        <TextField
          className={fieldClass}
          name="email"
          type="email"
          isRequired
          value={fields.email}
          onChange={set("email")}
          isInvalid={submitted && errors.email}
        >
          <Label className={labelClass}>{copy.fields.email}</Label>
          <Input className={inputClass} placeholder={copy.placeholders.email} autoComplete="email" />
          <FieldError>{copy.errors.email}</FieldError>
        </TextField>
      </div>

      <TextField className={fieldClass} name="company" value={fields.company} onChange={set("company")}>
        <Label className={labelClass}>
          {copy.fields.company} <span className="text-white/35">({copy.fields.companyOptional})</span>
        </Label>
        <Input className={inputClass} placeholder={copy.placeholders.company} autoComplete="organization" />
      </TextField>

      <TextField
        className={fieldClass}
        name="message"
        isRequired
        value={fields.message}
        onChange={set("message")}
        isInvalid={submitted && errors.message}
      >
        <Label className={labelClass}>{copy.fields.message}</Label>
        <TextArea className={`${inputClass} min-h-36`} placeholder={copy.placeholders.message} />
        <FieldError>{copy.errors.message}</FieldError>
      </TextField>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <Button
          size="lg"
          isDisabled={!isWhatsAppConfigured}
          onPress={() => send("whatsapp")}
          className="!bg-[#25D366] font-medium !text-[#062a14] shadow-[0_0_30px_-6px_rgba(37,211,102,0.7)] sm:flex-1"
        >
          <WhatsAppIcon className="size-5" />
          {copy.sendWhatsApp}
        </Button>
        <Button
          size="lg"
          isDisabled={!isEmailConfigured}
          onPress={() => send("email")}
          className="glow-button sm:flex-1"
        >
          <Mail className="size-4" />
          {copy.sendEmail}
        </Button>
      </div>

      <p className="text-xs leading-relaxed text-white/40">
        {copy.sendHint} {copy.privacy}
        {!isWhatsAppConfigured || !isEmailConfigured ? <span className="block pt-1">{copy.notConfigured}</span> : null}
      </p>
    </Form>
  );
}
