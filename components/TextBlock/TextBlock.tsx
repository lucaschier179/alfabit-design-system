import { HTMLAttributes, ReactNode } from "react";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";

export interface TextBlockProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title?: string;
  type?: "primary" | "secondary" | "dark";
}

export default function TextBlock({ children, className, title, type = "primary", ...rest }: TextBlockProps) {
  const textClass = type === "primary" ? "text-white" : "text-gray-primary";

  return (
    <Box className={`flex flex-col gap-2 p-5`} type={type} rounded {...rest}>
      <div className={className}>
        <Typography className={`${textClass} font-bold`}>
          {title}
        </Typography>
        <Typography className={textClass}>
          {children}
        </Typography>
      </div>
    </Box>
  )
}