import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
}


export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className={twMerge("flex items-center py-3 px-8 rounded-lg text-white bg-greenPormade", rest.className)}> {/* Estilização base/padrão do botão */}
      {children}
    </button>
  )
}