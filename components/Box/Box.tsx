import classNames from "classnames";
import { HTMLAttributes, ReactNode } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  border?: boolean;
  children: ReactNode;
  classname?: string;
  filledBackground?: boolean;
  rounded?: boolean;
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

export default function Box({ border = false, children, classname, filledBackground = false, rounded = false, type = "primary", ...rest }: BoxProps) {
  const classes = classNames({
    "rounded-md": rounded,
    "border border-gray-100": border,
    "bg-dark": filledBackground,
    [boxClassMap[type]]: type
  })

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}