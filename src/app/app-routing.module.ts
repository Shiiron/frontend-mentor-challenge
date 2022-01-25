import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectProjectComponent } from './select-project/components/select-project.component';
import { CrewComponent } from './space-tourism/components/crew/crew.component';
import { DestinationComponent } from './space-tourism/components/destination/destination.component';
import { MainPageComponent } from './space-tourism/components/main-page/main-page.component';
import { TechnologyComponent } from './space-tourism/components/technology/technology.component';

const routes: Routes = [
  { path: '', component: SelectProjectComponent },
  { path: 'space-tourism',
    children: [
      { path: 'home', component: MainPageComponent },
      { path: 'destination', component: DestinationComponent },
      { path: 'crew', component: CrewComponent },
      { path: 'technology', component: TechnologyComponent }
    ]
  },
  { path: 'country-list',
    children : [

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
