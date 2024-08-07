import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-headerbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.css'
})
export class HeaderbarComponent {

}
