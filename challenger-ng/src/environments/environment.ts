import 'zone.js/plugins/zone-error';
import { IEnvironment } from '@environments/environment.model';

export const environment: IEnvironment = {
  production: false,
  unsplash: {
    // add your access key here and remember to remove it before you create a pull request
    accessKey: 'Od-jUgcb1WIyQWY4Ml-695WJHE5O78dMBgvJ3jFcdBk',
    url: 'https://api.unsplash.com'
  }
};
