import Image from "next/image";

interface Props {
  src: string;
  alt?: string;
  width: number;
  height: number;
  phone?: number;
  tabletLarge?: number;
  desktop?: number;
  cssClasses?: string;
  quality?: number;
  eager?: boolean;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLImageElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLImageElement>;
}

const ImageContainer = ({
  src,
  alt,
  width,
  height,
  phone,
  tabletLarge,
  desktop,
  cssClasses,
  quality,
  eager,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: Props) => {
  return (
    <Image
      alt={alt || "Luna Blue - Plettenberg Bay"}
      src={src}
      width={width}
      height={height}
      quality={quality ?? 65}
      loading={eager ? "eager" : "lazy"}
      className={cssClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sizes={`((max-width: 650px) ${phone}vw, (max-width: 1100px) ${tabletLarge}vw, ${desktop}vw `}
    />
  );
};

export default ImageContainer;
