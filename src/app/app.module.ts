import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './space-tourism/components/main-page/main-page.component';
import { DestinationComponent } from './space-tourism/components/destination/destination.component';
import { CrewComponent } from './space-tourism/components/crew/crew.component';
import { TechnologyComponent } from './space-tourism/components/technology/technology.component';
import { MainMenuComponent } from './space-tourism/components/main-menu/main-menu.component';
import { SelectProjectComponent } from './select-project/components/select-project.component';

import { DataService } from './space-tourism/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    MainMenuComponent,
    SelectProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
