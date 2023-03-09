import 'zone.js/plugins/zone-error';
import { IEnvironment } from '@environments/environment.model';

export const environment: IEnvironment = {
  production: false,
  unsplash: {
    // add your access key here and remember to remove it before you create a pull request
    accessKey: 'lIihYg-GjOhCxE105SHURKCOE_poFt9uEd4KWT2Co8g',
    url: 'https://api.unsplash.com'
  }
};
