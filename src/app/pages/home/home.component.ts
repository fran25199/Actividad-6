import { Component, inject } from '@angular/core';
import { UsercardComponent } from "../../components/usercard/usercard.component";
import { UsuariosService } from '../../services/usuarios.service';
import { Iusuario } from '../../interfaces/iusuario.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsercardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  servicioUsuarios = inject(UsuariosService);
  arrUsuarios: Iusuario[] = [];

ngOnInit(): void {
  this.arrUsuarios = this.servicioUsuarios.getAll();
}



}
