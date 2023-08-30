import { cva } from "class-variance-authority";
import classNames from "classnames";
import { SwitchProps } from "./Switch";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ variant, enabled, disabled, ...rest }: SwitchProps) => {
  const containerVariant = cva(
    classNames(
      "flex inline-flex relative items-center h-6 w-14 rounded-full outline-none disabled:bg-disabled",
      { "pointer-events-none": disabled }
    ),
    {
      variants: {
        variant: {
          common: classNames(
            { "bg-darkBlueHover": enabled },
            { "bg-darkBlue": !enabled }
          ),
          contract: classNames(
            { "bg-borderGreen": enabled },
            { "bg-red": !enabled }
          ),
        },
      },
      defaultVariants: {
        variant: "common",
      },
    },
  );
  const containerClasses = containerVariant({ variant });

  const switchClasses = classNames(
    "inline-block w-5 h-5 rounded-full transform transition-transform duration-200 ease-in-out bg-white",
    enabled ? "translate-x-[2.1rem]" : "translate-x-[0.1rem]"
  );

  const iconClasses = classNames(
    "aria-disabled: text-font-disabled",
    { "text-borderGreen": enabled && !disabled },
    { "text-red": !enabled && !disabled },
    { "text-yellow": disabled },
  );

  return {
    Icon: iconClasses,
    Switch: switchClasses,
    Container: containerClasses,
  }
};
