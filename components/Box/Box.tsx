import { HTMLAttributes, ReactNode } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  border?: boolean;
  children: ReactNode;
  classname?: string;
  filledBackground?: boolean;
  type?: "primary" | "secondary" | "dark" | "alert" | "sucess" | "error";
}

const boxClassMap = {
  primary: "bg-primary",
  secondary: "bg-tertiary",
  dark: "bg-dark",
  alert: "bg-alert-100 text-alert-100",
  sucess: "bg-sucess-100 text-sucess-100",
  error: "bg-error-100 text-error-100",
}

export default function Box({ children, classname, ...rest }: BoxProps) {
  return (
    <div {...rest}>
      {children}
    </div>
  )
}