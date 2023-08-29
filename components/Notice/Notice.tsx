import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, ReactNode } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { LuAlertTriangle } from "react-icons/lu";
import Box from "../Box/Box";
import Typography from "../Typography/Typography";

export type NoticeProps = VariantProps<typeof noticeVariants> & {
  children?: ReactNode;
  message: string;
  onClose?: () => void;
  type: "alert" | "success" | "error";
} & HTMLAttributes<HTMLDivElement>;

const getIcon = (type: NoticeProps["type"]) => {
  switch (type) {
    case "success":
      return <AiOutlineCheckCircle className="w-4 h-4" />;
    case "alert":
      return <LuAlertTriangle className="w-4 h-4" />;
    case "error":
      return <AiOutlineCloseCircle className="w-4 h-4" />;
  }
};

const noticeVariants = cva("", {
  variants: {
    type: {
      success: "text-green-900",
      error: "text-red-900",
      alert: "text-yellow-900",
    },
    defaultVariants: {
      variant: "typeDefault",
    },
  },
});

export default function Notice({ children, className, message, onClose, type, ...rest }: NoticeProps) {
  return (
    <Box
      className={`${className} flex p-4 items-center justify-between`}
      filledBackground
      rounded
      //type={type}
      {...rest}
    >
      <div className="flex gap-2">
        {getIcon(type)}
        <Typography className={`${noticeVariants({ type })} ${className}`}>
          {message}
        </Typography>
      </div>
      {children}
      {onClose ? (
        <AiOutlineInfoCircle size={20} className="cursor-pointer" onClick={onClose} />
      ) : null}
    </Box>
  )
}