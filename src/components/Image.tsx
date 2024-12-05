import { ImageAsset } from '../data/images';

interface ImageProps extends ImageAsset {
  className?: string;
}

export default function Image({ src, alt, width, height, className = '' }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className}`}
    />
  );
}