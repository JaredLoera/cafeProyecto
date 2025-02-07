import { Component } from '@angular/core';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from "../components/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NavComponent,
    FooterComponent,
    RouterModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
