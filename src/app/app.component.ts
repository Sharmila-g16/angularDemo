import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgIf,FormsModule,RouterModule],
 
})
export class AppComponent {
  isDisabled = false;
  isDisabled1 = true;
  userName: string = ''; // For two-way binding
  password= "";
  first: string = 'Sharmila';
  second: string = 'Ganta';
  name: string = this.first + ' ' + this.second; // Concatenated name 

  constructor() {
    console.log(this.userName);
  }
}
