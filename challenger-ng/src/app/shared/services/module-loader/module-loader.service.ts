import { createNgModuleRef, Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleLoaderService {
  constructor(private injector: Injector) {}

  loadModule(module: any) {
    return createNgModuleRef(module, this.injector);
  }
}
