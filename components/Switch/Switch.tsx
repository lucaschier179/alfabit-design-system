import { Switch as HeadlessSwitch, type SwitchProps as HeadlessSwitchProps } from "@headlessui/react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import useStyle from "./Switch.style";

export interface SwitchProps extends HeadlessSwitchProps<any> {
  defaultEnable?: boolean;
  variant?: "common" | "contract";
  disabled?: boolean;
  onChange?: (enabled: boolean) => void
}

export default function Switch({ defaultEnable: enabledByDefault, variant = "common", disabled, onChange, ...rest }: SwitchProps) {
  const [enabled, setEnabled] = useState(enabledByDefault)
  const style = useStyle({ variant, enabled, disabled })

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
      className={style.Container}
      {...rest}
    >
      <span className="sr-only">
        Switch Toggle
      </span>
      {variant === "common" ?
        <span className={style.Switch} />
        : null}
      {variant === "contract" ?
        <span className={style.Switch}>
          {enabled ? (
            <BiCheck className={style.Icon} aria-disabled={disabled} />
          ) : null}
          {enabled || (
            <AiOutlineCloseCircle className={style.Icon} aria-disabled={disabled} />
          )}
        </span>
        : null}
    </HeadlessSwitch>
  )
}