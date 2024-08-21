import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Idatos, Iuser, Iusuario } from '../../interfaces/iusuario.model';

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
  specificUser!:Iuser;
  


  ngOnInit(){
    this.activatedRoute.params.subscribe((params:any)=>{
      let id = params._id;
      console.log(id);
      this.userService.getById(id)
      .then((user)=>{this.specificUser = user})
      .catch((error)=> {console.log(error)})
    })
  }
}
