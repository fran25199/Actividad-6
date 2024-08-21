import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { url } from 'inspector';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-newuser',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {
  newUserService = inject(UsuariosService);
  newUserForm!: FormGroup;
  constructor(){
    this.newUserForm = new FormGroup({
      nombre: new FormControl(null, []),
      apellidos: new FormControl(null, []),
      email: new FormControl(null, []),
      url: new FormControl(null, []),
    },[])

  }

  

  getDataForm(){
    console.log(this.newUserForm.value)
    
        //se enviaria la informacion al servicio.
        this.newUserForm.reset()
        // redirigir a otra seccion y cuando se vuelva a cargar estaria limpio.
  }
}



