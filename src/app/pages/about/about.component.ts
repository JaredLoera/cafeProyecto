import { Component } from '@angular/core';
import { NavComponent } from "../components/nav/nav.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-about',
  imports: [
    NavComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
