import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Iuser } from '../../interfaces/iusuario.model';
import { AlertService } from '../../services/alert.service';
import { Ialert } from '../../interfaces/ialert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  activatedRoute = inject(ActivatedRoute);
  userService = inject(UsuariosService);
  alertService = inject(AlertService);
  specificUser!:Iuser;
  alert!:Ialert;
  userLoaded:boolean = false; // variable que se usa para cargar el HTML despues del .TS (evitar errores de lectura de variables "undefined")
  
  constructor(private router: Router) {}

  ngOnInit(){
    this.activatedRoute.params.subscribe((params:any)=>{
      let id = params._id;
      console.log(id);
      this.userService.getById(id)
      .then((user)=>{
        if ('error' in user) {
          if(user.error){
          this.alertService.errorAlert("Usuario no encontrado", user.error, "/home")
          }
      } else {
          this.specificUser = user;
          this.userLoaded = true;
      }
      
      })
      .catch((error)=> {console.log(error)})
    })
  }
  deleteUser(user:Iuser){
    this.alertService.confirmAlert(`¿Eliminar a ${user.first_name} ${user.last_name}?`, "", "Eliminar", "cancelar")
    .then((message)=> {  this.alert = message
      if(this.alert.isConfirmed){
        this.userService.deleteUser(user._id)
        .then((user)=>{
          if ('error' in user) {
            this.alertService.errorAlert("Usuario no encontrado",user.error, "/home")
            //console.log(user.error); Este muestra el error de la API
          }else {
            this.specificUser = user;
            this.alertService.successAlert(`${this.specificUser.first_name} ${this.specificUser.last_name}`, "Se ha elimiando correctamente", "/home")
            //console.log(this.specificUser); Este muestra la respuesta de la API
          }
        })
        .catch ((error)=> {console.log(error)})
      }
    })
    .catch ((error)=> {console.log(error)})
}
}

