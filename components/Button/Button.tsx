import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  variant?: '',
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge("flex items-center py-3 px-8 rounded-lg font-bold text-white bg-black/50 disabled:bg-black/20", rest.className)}
    > {/* Estilização base/padrão do botão */}
      {children}
    </button>
  )
}