export interface PlaceInterface {
  id: number;
  name: string;
  description: string;
  imageId: string;
}

export function getImageUrl(place: PlaceInterface) {
  return `https://i.imgur.com/${place.imageId}l.jpg`;
}
