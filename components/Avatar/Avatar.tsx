import classNames from "classnames";
import { HTMLAttributes } from "react";
import AvatarIcon from "./AvatarIcon";
import AvatarImage from "./AvatarImage";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const avatarSizeMap = {
  "xs": "w-4 h-4",
  "sm": "w-6 h-6",
  "md": "w-8 h-8",
  "lg": "w-10 h-10",
  "xl": "w-12 h-12",
  "2xl": "w-14 h-14",
  "3xl": "w-16 h-16",
  "4xl": "w-18 h-18",
  "5xl": "w-20 h-20",
}

export default function Avatar({ children, className, size = "xs", ...rest }: AvatarProps) {
  const avatarSizeClass = avatarSizeMap[size]

  return (
    <div
      className={classNames(
        "relative rounded-full flex items-center justify-center text-white bg-blue-500",
        avatarSizeClass,
        className
      )}
      {...rest}
    >
      <AvatarIcon />
      {/* <AvatarImage /> */}
    </div>
  )
}