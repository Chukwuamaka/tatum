import { useState, type ImgHTMLAttributes } from "react";

import UserSolidIcon from "../icons/UserSolidIcon";

interface DefaultUserAvatarProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt"
> {
  src?: string | null;
  alt?: string;
  fallbackClassName?: string;
  iconClassName?: string;
}

function DefaultUserAvatar({
  src,
  alt,
  className,
  fallbackClassName,
  iconClassName,
  ...props
}: DefaultUserAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false);

  const shouldRenderImage = Boolean(src) && !hasImageError;

  if (shouldRenderImage) {
    return (
      <img
        {...props}
        className={className ?? "size-10 rounded-full object-cover"}
        src={src ?? undefined}
        alt={alt}
        onError={() => setHasImageError(true)}
      />
    );
  }

  return (
    <div
      className={
        fallbackClassName ??
        "flex size-10 items-center justify-center rounded-full bg-[#e0f2fe] text-[#0369a1]"
      }
      aria-label={alt}
      role="img"
    >
      <UserSolidIcon
        className={iconClassName ?? "size-5 shrink-0"}
        aria-hidden="true"
      />
    </div>
  );
}

export default DefaultUserAvatar;
