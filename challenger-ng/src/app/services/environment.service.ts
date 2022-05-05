import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor() {}

  get production() {
    return environment.production;
  }

  get unsplashAccessKey() {
    return environment.unsplash.accessKey;
  }
}
