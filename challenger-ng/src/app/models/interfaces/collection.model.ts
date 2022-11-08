import { Photo } from './photo.model';

export interface Collection {
  id: number;
  title: string;
  published_at: Date;
  cover_photo: Photo;
  total_photos: number;
}

// toDo move to types same as topics
export const CollectionOptions = {
  perPage: 10
};
