import { ModuleLoaderService } from './shared/services/module-loader/module-loader.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppContextSelectors, RouterSelectors } from './store/selectors';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @ViewChild('loader', { read: ViewContainerRef })
  dynamicContainer!: ViewContainerRef;
  loading: boolean = true;

  constructor(
    private store: Store,
    private cdr: ChangeDetectorRef,
    private moduleLoaderService: ModuleLoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLoader();
    this.store.select(AppContextSelectors.isLoading).subscribe(this.processLoader.bind(this));
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(() => this.processLoader(true));
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.processLoader(false));
  }

  private processLoader(isLoading: boolean) {
    this.loading = isLoading;
    this.cdr.detectChanges();
  }

  async loadLoader() {
    const { LoaderComponent, LoaderModule } = await import('./components/loader/loader.component');
    const moduleRef = await this.moduleLoaderService.loadModule(LoaderModule);
    this.dynamicContainer?.createComponent(LoaderComponent, { ngModuleRef: moduleRef });
  }
}
