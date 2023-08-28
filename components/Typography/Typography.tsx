import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  element?: keyof JSX.IntrinsicElements;
  size?: string;
  variant?: string;
}

export default function Typography({ children, element = "p", ...rest }: TypographyProps) {
  const Element = element;

  return (
    <Element>
      {children}
    </Element>
  )
}