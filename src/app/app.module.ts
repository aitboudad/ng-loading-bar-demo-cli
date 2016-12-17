import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgLoadingBarModule } from 'ng-loading-bar';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService } from './hero-data';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgLoadingBarModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemHeroService, { delay: 500 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
