export type InquiryFields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type Labels = { name: string; email: string; company: string; needs: string };

export function composeInquiry(fields: InquiryFields, greeting: string, labels: Labels): string {
  const lines = [
    greeting,
    "",
    `${labels.name}: ${fields.name.trim()}`,
    `${labels.email}: ${fields.email.trim()}`,
  ];
  if (fields.company.trim()) lines.push(`${labels.company}: ${fields.company.trim()}`);
  lines.push("", `${labels.needs}:`, fields.message.trim());
  return lines.join("\n");
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiry(fields: InquiryFields) {
  return {
    name: fields.name.trim().length === 0,
    email: !EMAIL_PATTERN.test(fields.email.trim()),
    message: fields.message.trim().length === 0,
  };
}
