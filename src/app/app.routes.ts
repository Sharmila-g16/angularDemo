import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { RegistrationComponent } from './registration/registration.component';


export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'first', component: FirstComponent },
    { path: '', component: RegistrationComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
