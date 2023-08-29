import Image from "next/image";
import { ImgHTMLAttributes } from "react";

export interface AvatarImageProps extends ImgHTMLAttributes<ImageBitmap> {
  src: string;
  altDescription: string | "";
};

export default function AvatarImage({ src, altDescription, }: AvatarImageProps) {
  return (
    <div>
      <Image
        src={src}
        alt={altDescription}
        className="rounded-full"
        width={100}
        height={100} />
    </div>
  )
}