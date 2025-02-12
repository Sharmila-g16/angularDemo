import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'

// const routes=[
//   {
//     path:'',comment:registrationComponent;
//   }
// ]

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    CommonModule, // Add CommonModule here
    FormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [AppComponent],
  bootstrap: []
})
export class AppModule { }
