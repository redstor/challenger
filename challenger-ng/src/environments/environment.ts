import 'zone.js/plugins/zone-error';
import { IEnvironment } from '@environments/environment.model';

export const environment: IEnvironment = {
  production: false,
  unsplash: {
    // toDo create a .env variable to add the key needed
    accessKey: 'UNSPLASH_ACCESS_KEY',
    url: 'UNSPLASH_URL'
  }
};
