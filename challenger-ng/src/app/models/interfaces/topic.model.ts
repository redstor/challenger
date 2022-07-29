import { Photo } from './photo.model';

export interface Topic {
  id: string;
  title: string;
  cover_photo: Photo | null;
}
