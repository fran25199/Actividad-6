import { Injectable } from '@angular/core';
import { Iusuario } from '../interfaces/iusuario.model';
import { USUARIOS } from '../db/ddbb.db';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private arrUsuarios: Iusuario[] = USUARIOS;
  
  getAll(): Iusuario[] {
    return this.arrUsuarios;
  }

 // getById(id:number): Iusuario{
    //return this.arrUsuarios.find( user => user.id === id);
 // }
  
  constructor() { }
}
