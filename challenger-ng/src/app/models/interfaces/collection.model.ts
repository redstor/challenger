import { Photo } from './photo.model';

export interface Collection {
  id: number;
  title: string;
  cover_photo: Photo;
}

// toDo move to types same as topics
export const CollectionOptions = {
  perPage: 10
};
