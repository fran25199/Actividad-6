import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navcard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navcard.component.html',
  styleUrl: './navcard.component.css'
})
export class NavcardComponent {

}
