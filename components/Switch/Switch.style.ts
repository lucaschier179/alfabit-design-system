import { cva } from "class-variance-authority";
import classNames from "classnames";
import { SwitchProps } from "./Switch";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ variant, enabled, disabled, ...rest }: SwitchProps) => {
  const containerVariant = cva(
    classNames(
      "flex inline-flex relative item-center h-6 w-16 rounded-full outline-none disabled:bg-disabled",
      { "pointer-events-none": disabled }
    ),
    {
      variants: {
        variant: {
          common: classNames(
            { "bg-primary": enabled },
            { "bg-primary hover:bg-primaryHover": !enabled },
          ),
          contract: classNames(
            { "bg-success": enabled },
            { "bg-error": !enabled }
          ),
        },
      },
      defaultVariants: {
        variant: "common",
      },
    }
  )
  const containerClassses = containerVariant({ variant });
}
