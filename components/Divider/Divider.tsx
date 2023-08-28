import classNames from "classnames";
import { HTMLAttributes, ReactNode } from "react";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  bgColor?: "light" | "dark" | "black";
  children?: ReactNode;
  className?: string;
  height?: string;
  width?: string;
}

const colorClassMap = {
  light: "bg-light",
  dark: "bg-dark",
  black: "bg-black",
}

export default function Divider({ bgColor = "black", children, className, height = "h-[1px]", width, ...rest }: DividerProps) {
  const colorClass = colorClassMap[bgColor]

  const barClass = classNames(
    children ? "w-1/3" : "w-1/2",
    height,
    colorClass
  )

  return (
    <div className={classNames(width, "flex items-center justify-center")}>
      <div className={barClass} ></div>
      {children &&
        <div className="px-3">
          {children}
        </div>
      }
      <div className={barClass}></div>
    </div>
  )
}