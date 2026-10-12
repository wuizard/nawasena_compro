import { buttonVariants } from "@heroui/react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  external?: boolean;
  children: ReactNode;
};

/** An anchor styled with HeroUI button variants, for navigation that should look like a button. */
export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  fullWidth,
  external,
  className = "",
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={`${buttonVariants({ variant, size, fullWidth })} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
