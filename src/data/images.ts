export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const images: Record<string, ImageAsset> = {
  Dialogmodell: {
    id: 'Dialogmodell',
    src: '/assets/images/Dialogmodell.png',
    alt: 'Dialogmodell',
    width: 400,
    height: 400
  }
};