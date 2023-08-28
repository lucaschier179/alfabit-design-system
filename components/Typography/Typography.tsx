import { ReactNode } from "react";

type TypographyProps = {
  children: ReactNode;
  element?: keyof JSX.IntrinsicElements;
  size?: "xs" | "sm" | "md" | "xl" | "title1" | "title2" | "title3";
  variant?: "primary" | "secondary" | "tertiary";
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

export default function Typography({ children, element = "p", size = "md", variant = "primary", ...rest }: TypographyProps) {
  const Element = element as any;

  return (
    <Element
      {...rest}
      className={`${variantClassMap.variant[variant]} ${variantClassMap.size[size]} font-normal text-sm text-gray`}
    >
      {children}
    </Element>
  )
}