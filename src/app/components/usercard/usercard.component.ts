import { Input, Component } from '@angular/core';
import { Iusuario } from '../../interfaces/iusuario.model';
import { NavcardComponent } from '../navcard/navcard.component';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [NavcardComponent],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {
  @Input() user!: Iusuario

}
