import { Switch as HeadlessSwitch, type SwitchProps as HeadlessSwitchProps } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

export interface SwitchProps extends HeadlessSwitchProps<any> {
  defaultEnable?: boolean;
  variant?: "common" | "contract";
  disabled?: boolean;
  onChange?: (enabled: boolean) => void
}

export default function Switch({ defaultEnable: enabledByDefault, variant = "common", disabled, onChange, ...rest }: SwitchProps) {
  const [enabled, setEnabled] = useState(enabledByDefault)

  function toggle() {
    const newState = !enabled
    setEnabled(newState)
    onChange?.(newState)
  }

  return (
    <HeadlessSwitch
      checked={enabled}
      onChange={toggle}
      disabled={disabled}
      {...rest}
    >
      <span>
        Switch Toggle
      </span>
      {variant === "common" ?
        <span />
        : null}
      {variant === "contract" ?
        <span>
          {enabled ? (
            <BiCheck aria-disabled={disabled} />
          ) : null}
          {enabled || (
            <AiOutlineCloseCircle aria-disabled={disabled} />
          )}
        </span>
        : null}
    </HeadlessSwitch>
  )
}