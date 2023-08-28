import { AnchorHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  disabled?: boolean;
}

export default function LinkButton({ children, className, disabled, href, ...rest }: LinkButtonProps) {
  return (
    <a
      href={disabled ? undefined : href}
      aria-disabled={disabled}
      className={twMerge("flex items-center py-3 px-8 rounded-lg font-bold text-white bg-darkBlue", className)}
      {...rest}
    >
      {children}
    </a >
  )
}