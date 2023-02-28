import { ToastService } from './shared/services/toast/toast.service';
import { ModuleLoaderService } from './shared/services/module-loader/module-loader.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppContextSelectors } from './store/selectors';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

import { StyleManagerService } from './shared/services/themes/style-manager.service';
import { MatMenuModule } from '@angular/material/menu';
import { MenuItem } from './models/interfaces/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild('loader', { read: ViewContainerRef })
  loaderContainer!: ViewContainerRef;
  @ViewChild('language', { read: ViewContainerRef })
  languageContainer!: ViewContainerRef;

  loading: boolean = true;

  navItems: MenuItem[] = [
    {
      label: 'Collections',
      route: 'collections'
    },
    {
      label: 'Topics',
      route: 'topics'
    },
    {
      label: 'Search',
      route: 'search'
    },
    {
      label: 'Stats',
      route: 'stats'
    },
    {
      label: 'Random',
      route: 'random'
    }
  ];

  constructor(
    private store: Store,
    private cdr: ChangeDetectorRef,
    private moduleLoaderService: ModuleLoaderService,
    private router: Router,
    private toastService: ToastService,
    private styleManager: StyleManagerService
  ) {}

  ngOnInit(): void {
    this.loadLoader();
    this.loadLanguage();
    this.store.select(AppContextSelectors.isLoading).subscribe(this.processLoader.bind(this));
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => this.processLoader(true));
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.processLoader(false));
    this.toastService.initService();
  }

  private processLoader(isLoading: boolean) {
    this.loading = isLoading;
    this.cdr.detectChanges();
  }

  private async loadLoader() {
    const { LoaderComponent, LoaderModule } = await import('./components/loader/loader.component');
    const moduleRef = await this.moduleLoaderService.loadModule(LoaderModule);
    this.loaderContainer?.createComponent(LoaderComponent, { ngModuleRef: moduleRef });
  }

  private async loadLanguage() {
    const { LanguageComponent, LanguageModule } = await import('./components/language/language.component');
    const moduleRef = await this.moduleLoaderService.loadModule(LanguageModule);
    this.languageContainer?.createComponent(LanguageComponent, { ngModuleRef: moduleRef });
    this.cdr.detectChanges();
  }

  public setTheme(theme: string) {
    this.styleManager.setStyle(theme);
  }
}
