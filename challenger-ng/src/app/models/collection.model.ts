import { Photo } from './photo.model';

export interface Collection {
  id: number;
  title: string;
  cover_photo: Photo;
}
