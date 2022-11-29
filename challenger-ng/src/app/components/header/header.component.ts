import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '@app/models/interfaces/menu-item.model';
import { HeaderService } from '@app/shared/services/header/header.service';
import { StyleManagerService } from '@app/shared/services/themes/style-manager.service';
import { distinctUntilChanged, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private subject: Subject<string> = new Subject();
  navItems: MenuItem[] = [
    {
      label: 'Home',
      route: 'home'
    },
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
      label: 'Home',
      route: 'home'
    },
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

  constructor(private styleManager: StyleManagerService, private router: Router, private headerService: HeaderService) {}

  public setTheme(theme: string) {
    this.styleManager.setStyle(theme);
  }

  handleSearch(event: any) {
    this.router.url !== '/search' ? this.router.navigateByUrl('/search') : this.subject.next(event.target.value);
  }

  ngOnInit(): void {
    this.subject.pipe(debounceTime(500), distinctUntilChanged()).subscribe((searchTextValue: string) => {
      this.headerService.onSearchChanged(searchTextValue);
    });
  }
}
