import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
    TextareaHTMLAttributes<HTMLTextAreaElement> | InputHTMLAttributes<HTMLInputElement>
  )

export function InputOrTextArea({ multiline, ...props }: InputProps) {
  if (multiline) {
    return (
      <textarea {...props as TextareaHTMLAttributes<HTMLTextAreaElement>} />
    )
  }
  return (
    <input {...props as InputHTMLAttributes<HTMLInputElement>} />
  )
}

export function Input({ className, label, ...rest }: InputProps) {
  return (
    <div className="relative">
      {label &&
        <label className={twMerge("absolute pt-1 pl-2 text-sm text-white", className)}
        >
          {label}
        </label>
      }
      <InputOrTextArea
        className={twMerge(`${label && "pt-5"} w-80 h-20 p-2 rounded-md border-2 border-greenPormade text-white bg-darkGray`, className)}
        {...rest}
      />
    </div>
  )
}