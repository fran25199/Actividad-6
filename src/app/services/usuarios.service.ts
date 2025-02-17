import { inject, Injectable } from '@angular/core';
import { Idatos, InewUser, Iuser, Iusuario } from '../interfaces/iusuario.model';
import { USUARIOS } from '../db/ddbb.db';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private arrUsuarios: Iusuario[] = USUARIOS;
  private baseUrl: string = "https://peticiones.online/api/users/";
  http = inject(HttpClient);

  getAll(): Promise<Idatos> {
    return firstValueFrom(this.http.get<Idatos>(this.baseUrl))

  }

  getById (id:string): Promise<Iuser> {
    return firstValueFrom(this.http.get<Iuser>(`${this.baseUrl}${id}`))
  }

  getByPage (page:string) : Promise<Idatos>{
    return firstValueFrom(this.http.get<Idatos>(`${this.baseUrl}?page=${page}`))
  }

  deleteUser (id:string){
    return firstValueFrom(this.http.delete<Iuser>(`${this.baseUrl}${id}`))
  }
  addUser(newUser:InewUser) : Promise<Iuser>{
    return firstValueFrom(this.http.post<Iuser>(`${this.baseUrl}`, newUser));
  }
  updateUser(updateUser:InewUser, id:string) : Promise<Iuser>{
    return firstValueFrom(this.http.put<Iuser>(`${this.baseUrl}${id}`, updateUser));
  }

}

