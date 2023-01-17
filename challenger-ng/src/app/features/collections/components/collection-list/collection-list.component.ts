import { CollectionOptions } from './../../../../models/interfaces/collection.model';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Collection } from '@app/models';
import { CollectionSelectors } from '@app/store/selectors';
import { CollectionActions } from '@app/store/actions';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html'
})
export class CollectionListComponent implements OnInit {
  collections$: Observable<ReadonlyArray<Collection>> = this.store.pipe(select(CollectionSelectors.selectCollections));
  total$: Observable<number> = this.store.pipe(select(CollectionSelectors.selectTotal));
  pageSize: number = CollectionOptions.perPage;
  pageSizeOptions: number[] = CollectionOptions.pageSizeOptions;

  constructor(private store: Store, private paginatorIntl: MatPaginatorIntl, private translate: TranslateService) {
    this.translate.get('paginator.itemsPerPage').subscribe((res: string) => {
      this.paginatorIntl.itemsPerPageLabel = res;
    });
    this.translate.get('paginator.firstPageLabel').subscribe((res: string) => {
      this.paginatorIntl.firstPageLabel = res;
    });
    this.translate.get('paginator.lastPageLabel').subscribe((res: string) => {
      this.paginatorIntl.lastPageLabel = res;
    });
    this.translate.get('paginator.nextPageLabel').subscribe((res: string) => {
      this.paginatorIntl.nextPageLabel = res;
    });
    this.translate.get('paginator.previousPageLabel').subscribe((res: string) => {
      this.paginatorIntl.previousPageLabel = res;
    });
    this.paginatorIntl.changes.next();
  }

  ngOnInit(): void {
    this.store.dispatch(CollectionActions.loadCollections({}));
  }

  loadCollection({ pageIndex, pageSize }: PageEvent) {
    this.store.dispatch(CollectionActions.loadCollections({ page: pageIndex + 1, perPage: pageSize }));
  }
}
