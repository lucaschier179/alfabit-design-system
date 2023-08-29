import classNames from "classnames";
import { HTMLAttributes } from "react";
import { BiUser } from "react-icons/bi";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg";
}

const avatarSizeMap = {
  "xs": "w-5 h-5",
  "sm": "w-6 h-6",
  "md": "w-8 h-8",
  "lg": "w-9 h-9",
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
      <BiUser className="absolute w-1/2 h-1/2" />
    </div>
  )
}