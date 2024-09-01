import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderbarComponent } from "./components/headerbar/headerbar.component";
import { UserComponent } from './pages/user/user.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { UpdateuserComponent } from './pages/updateuser/updateuser.component';
import { Page404Component } from './pages/page404/page404.component';
import { UsuariosService } from './services/usuarios.service';
import { Idatos, Iuser } from './interfaces/iusuario.model';
import Swal from 'sweetalert';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderbarComponent, UserComponent, NewuserComponent, UpdateuserComponent, Page404Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Actividad_6';
  datosService = inject(UsuariosService);
  datos!: Idatos
  
  ngOnInit(){
    this.datosService.getAll()
    .then((datos)=> { this.datos = datos
      console.log(datos);
    })
    .catch ((error)=> {console.log(error)})
    }
  }

