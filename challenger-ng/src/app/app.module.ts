import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '@environments/environment';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from './store/reducers';
import { appEffects } from './store/effects';

import { challengerRoutes } from './app-routing';
import { RouterPreloadStrategyService } from './shared/services/router-preload-strategy/router-preload-strategy.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    RouterModule.forRoot(challengerRoutes, {
      preloadingStrategy: RouterPreloadStrategyService
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot(appEffects),
    BrowserAnimationsModule,
    MatCardModule,
    FlexModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [RouterPreloadStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
