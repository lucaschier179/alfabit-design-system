import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TypographyProps = {
  children: ReactNode;
  className?: string;
  element?: keyof JSX.IntrinsicElements;
} & JSX.IntrinsicElements["p"];

const variantClassMap = {
  variant: {
    primary: "text-gray-primary",
    secondary: "text-gray-secondary",
    tertiary: "text-gray-tertiary",
  },
  size: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    xl: "text-xl",
    title1: "text-txl",
    title2: "text-tlg",
    title3: "text-tmd",
  },
};

export default function Typography({ children, className, element = "p", ...rest }: TypographyProps) {
  const Element = element as any;

  return (
    <Element
      {...rest}
      className={twMerge(`font-normal text-sm text-gray`, className)}
    >
      {children}
    </Element>
  )
}