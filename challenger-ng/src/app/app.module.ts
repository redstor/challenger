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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from './store/reducers';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { PhotoComponent } from './photo/photo.component';
import { CollectionsEffects } from './store/effects/collections.effects';
import { PhotosEffects } from './store/effects/photos.effects';
import { PhotoEffects } from './store/effects/photo.effects';

@NgModule({
  declarations: [AppComponent, HomeComponent, CollectionComponent, PhotoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    RouterModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([CollectionsEffects, PhotosEffects, PhotoEffects]),
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
