import { Component } from '@angular/core';
import { User,Frontend,Backend } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dia5-day1';
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  count = 0;

  tambah(){
    this.count++;
  }

  frontendDev: Frontend;
  backendDev: Backend;

  constructor(){
    this.frontendDev = new Frontend();
    this.frontendDev.setName("Bobo Saputra");
    this.frontendDev.setExperience(2);
    this.frontendDev.setPreviousJob("Junior Frontend Developer");

    this.backendDev = new Backend();
    this.backendDev.setName("Mira Susanti");
    this.backendDev.setExperience(3);
    this.backendDev.setPreviousJob("Junior Backend Developer");
  }
}

