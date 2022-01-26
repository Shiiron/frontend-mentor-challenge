import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './space-tourism/components/main-page/main-page.component';
import { DestinationComponent } from './space-tourism/components/destination/destination.component';
import { CrewComponent } from './space-tourism/components/crew/crew.component';
import { TechnologyComponent } from './space-tourism/components/technology/technology.component';
import { MainMenuComponent } from './space-tourism/components/main-menu/main-menu.component';
import { SelectProjectComponent } from './select-project/components/select-project.component';
import { CountryHeaderComponent } from './country-list/components/header/header.component';
import { CountryListComponent } from './country-list/components/country-list/country-list.component';
import { CountryDetailComponent } from './country-list/components/country-detail/country-detail.component';
import { CountryListItemComponent } from './country-list/components/country-list-item/country-list-item.component';

import { DataService } from './space-tourism/services/data.service';
import { CountryService } from './country-list/services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    MainMenuComponent,
    SelectProjectComponent,
    CountryHeaderComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [DataService, CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
