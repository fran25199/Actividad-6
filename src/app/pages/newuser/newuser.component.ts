import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { url } from 'inspector';
import { UsuariosService } from '../../services/usuarios.service';
import { Iusuario, Iuser } from '../../interfaces/iusuario.model';
import { AlertService } from '../../services/alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newuser',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent {
  newUserService = inject(UsuariosService);
  alertService = inject(AlertService);
  activatedRoure = inject(ActivatedRoute);

  regExpEmail: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
  regExpLastName:RegExp = /^[a-zA-Z]+( [a-zA-Z]+)+\s*$/; //esta expresionr regular como minimo espera 1 espacio entre palabras, para poner 2 o mas apellidos
  regExpUrl:RegExp = /^(http|https):\/\/[a-zA-Z0-9.-]+(:[0-9]+)?(\/[a-zA-Z0-9._~:/?#@!$&'()*+,;=-]*)?$/;
  newUserForm!: FormGroup;
  response!:Iuser;
  user!:Iuser;
  userUpdated!:Iuser;
  tipo:string = "Añadir";
  
  constructor(){
    this.newUserForm = new FormGroup({
      first_name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      last_name: new FormControl(null, [Validators.required, Validators.pattern(this.regExpLastName)]), 
      email: new FormControl(null, [Validators.required, Validators.pattern(this.regExpEmail)]),
      image: new FormControl(null, [Validators.required, Validators.pattern(this.regExpUrl)]),
    },[])

  }

  ngOnInit(){
    this.activatedRoure.params.subscribe((params:any)=>{
      if ('id' in params) {
      this.tipo = "Actualizar"
      this.newUserService.getById(params.id)
      .then((message)=> {this.user = message
        this.newUserForm = new FormGroup({
          first_name: new FormControl(this.user.first_name, [Validators.required, Validators.minLength(2)]),
          last_name: new FormControl(this.user.last_name, [Validators.required, Validators.pattern(this.regExpLastName)]),
          email: new FormControl(this.user.email, [Validators.required, Validators.pattern(this.regExpEmail)]),
          image: new FormControl(this.user.image, [Validators.required]),
        },[])
      })
     
    }
    })
  }

  getDataForm(){
    if(this.tipo === "Añadir"){
    this.newUserService.addUser(this.newUserForm.value)
    .then((message)=> {this.response = message
      console.log(this.response);
      this.alertService.successAlert(`${this.response.first_name} ${this.response.last_name}`, "Ha sido creado correctamente","/home" ); // Deberiamos redirigirnos a `/user/${this.response.id}` para mostrar la userCard del usuarior recien creado
    })
    .catch((error)=>{console.log(error)})
        this.newUserForm.reset()
  }else{
    this.newUserService.updateUser(this.newUserForm.value, this.user._id)
    .then((message)=>{this.userUpdated = message
      console.log(this.userUpdated);
      console.log(this.user);
      this.alertService.successAlert("Modificación realizada", "Se han relalizado los cambios correctamente" , `/user/${this.userUpdated._id}`);
    })
    .catch((error)=>{console.log(error)
    })
  }
}

validateForm(controlName:string, validator:string){
 return this.newUserForm.get(controlName)?.hasError(validator) && this.newUserForm.get(controlName)?.touched
}
}



