import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html'
})
export class LanguageComponent implements OnInit, OnDestroy {
  enableLangs: any[] = [
    { label: 'Afrikaans', value: 'af' },
    { label: 'Deutsch', value: 'de' },
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
    { label: 'Hrvatski', value: 'hr' },
    { label: 'Italiano', value: 'it' }
  ];
  languageForm = new FormGroup({
    language: new FormControl(this.enableLangs[2].value)
  });
  subscriptions: Subscription = new Subscription();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.subscriptions.add(this.languageForm?.controls?.['language']?.valueChanges.subscribe(this.changeLanguage.bind(this)));
  }

  private changeLanguage(language: string) {
    this.translate.setDefaultLang(language);
    this.translate.use(language);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}

// Lazy loaded component via Ivy
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatSelectModule, ReactiveFormsModule],
  declarations: [LanguageComponent]
})
export class LanguageModule {}
