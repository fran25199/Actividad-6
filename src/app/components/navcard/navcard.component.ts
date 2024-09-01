import { Input, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Iuser} from '../../interfaces/iusuario.model';
import swal from 'sweetalert';
import { UsuariosService } from '../../services/usuarios.service';
import { AlertService } from '../../services/alert.service';
import { Ialert } from '../../interfaces/ialert';

@Component({
  selector: 'app-navcard',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navcard.component.html',
  styleUrl: './navcard.component.css'
})
export class NavcardComponent {
  @Input() user!:Iuser;
  userService = inject(UsuariosService);
  alertService = inject(AlertService);
  alert!:Ialert;
  response!:Iuser;

  

  deleteUser(user:Iuser){
    this.alertService.confirmAlert("¿Eliminar a " + user.first_name +" "+ user.last_name + "?", "", "Eliminar", "cancelar")
    .then((message)=> {  this.alert = message
      if(this.alert.isConfirmed){
        this.userService.deleteUser(user._id)
        .then((user)=>{
          if ('error' in user) {
            this.alertService.errorAlert("Usuario no encontrado",user.error, "/home")
          }else {
            this.response = user;
            this.alertService.successAlert(this.response.first_name +" "+ this.response.last_name, "Se ha elimiando correctamente", "/home")
          }
        })
        .catch ((error)=> {console.log(error)})
      }
    })
    .catch ((error)=> {console.log(error)})
}
}

