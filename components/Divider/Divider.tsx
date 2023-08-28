import { HTMLAttributes, ReactNode } from "react";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  height?: string;
  width?: string;

}

export default function Divider({ children, className, height, width, ...rest }: DividerProps) {
  return (
    <>
      <div className="" {...rest}></div>
      {children &&
        <div>
          {children}
        </div>
      }
      <div className="" {...rest}></div>
    </>
  )
}