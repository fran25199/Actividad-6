import { Input, Component } from '@angular/core';
import { Iuser, Iusuario } from '../../interfaces/iusuario.model';
import { NavcardComponent } from '../navcard/navcard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [NavcardComponent, RouterOutlet],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {
  @Input() user!: Iuser

}
