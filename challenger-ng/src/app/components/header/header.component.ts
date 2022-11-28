import { state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@app/models/interfaces/menu-item.model';
import { StyleManagerService } from '@app/shared/services/themes/style-manager.service';
import { SearchActions } from '@app/store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFocused: boolean = false;
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
      label: 'Stats',
      route: 'stats'
    }
  ];

  mobileNavItems: MenuItem[] = [
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
    }
  ];

  constructor(private styleManager: StyleManagerService, private store: Store) {}

  public setTheme(theme: string) {
    this.styleManager.setStyle(theme);
  }

  handleSearch(value: string) {
    this.store.dispatch(SearchActions.newSearch({ searchKey: value }));
  }

  ngOnInit(): void {}
}
