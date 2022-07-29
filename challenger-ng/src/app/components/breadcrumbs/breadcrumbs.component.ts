import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { Subscription } from 'rxjs/internal/Subscription';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

import { RouterSelectors } from '@app/store/selectors';
import { EnableRoutes, RouteTypes } from '@app/models/types/enable-routes';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  routes: string[] = [];
  selected: string = '';

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.subscription.add(this.store.select(RouterSelectors.selectUrl).subscribe(this.buildBreadcrums.bind(this)));
    this.subscription.add(
      this.store
        .select(RouterSelectors.selectRouteData)
        .pipe(filter(data => !!data))
        .subscribe(({ breadcrumb }) => (this.selected = breadcrumb))
    );
  }

  private buildBreadcrums(currentUrl: any) {
    this.routes = currentUrl?.split('/').filter((route: RouteTypes) => EnableRoutes.includes(route));
  }

  async handleGoto(route: string) {
    const goTo = {
      [RouteTypes.collections]: () => this.router.navigate(['/']),
      [RouteTypes.collection]: async () => {
        const collectionId = await firstValueFrom(this.store.select(RouterSelectors.selectRouteParam('collectionId')));
        this.router.navigate(['collections/collection', collectionId]);
      }
    }[route];
    !!goTo && (await goTo());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
