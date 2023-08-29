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

  const switchClasses = classNames(
    "inline-block w-5 h-5 rounded-full tranform transition-transform duration-200 ease-in-out bg-white",
    enabled ? "translate-x-[2.1rem]" : "translate-x"
  );

  const iconClasses = classNames(
    "aria-disabled: text-font-disabled",
    { "text-success": enabled ? !disabled : null },
    { "text-error": !enabled ? !disabled : null },
    { "text-alert": disabled },
  );

  return {
    Icon: iconClasses,
    Switch: switchClasses,
    Container: containerClassses, 
    }
};
