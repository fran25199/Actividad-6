import { Input, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Iuser, Iusuario } from '../../interfaces/iusuario.model';

@Component({
  selector: 'app-navcard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navcard.component.html',
  styleUrl: './navcard.component.css'
})
export class NavcardComponent {
  @Input() user!:Iuser;
}
