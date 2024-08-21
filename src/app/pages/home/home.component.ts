import { Component, inject } from '@angular/core';
import { UsercardComponent } from "../../components/usercard/usercard.component";
import { UsuariosService } from '../../services/usuarios.service';
import { Idatos,Iusuario } from '../../interfaces/iusuario.model';
import { NavpageComponent } from '../../components/navpage/navpage.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsercardComponent, NavpageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  servicioUsuarios = inject(UsuariosService);
  arrUsuarios!: Iusuario;
  datos!:Idatos
  page:string ="";

ngOnInit(): void {
this.getPage();
  }
  getPage(page:string = "1"){
    this.page = page;
    this.servicioUsuarios.getByPage(this.page)
    .then((datos)=> { this.datos = datos
    })
    .catch ((error)=> {console.log(error)})

  }

}




