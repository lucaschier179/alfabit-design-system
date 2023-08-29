import { Switch as HeadlessSwitch, type SwitchProps as HeadlessSwitchProps } from "@headlessui/react"

export interface SwitchProps {
  defaultEnable?: boolean;
  variant?: "common" | "contract";
  disabled?: boolean;
  onChange?: (enabled: boolean) => void
}

export default function Switch({ defaultEnable: enabledByDefault, variant = "common", disabled, onChange }: SwitchProps) {
  return (
    <div>
      <Switch />
    </div>
  )
}