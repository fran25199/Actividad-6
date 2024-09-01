import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private router: Router) {}

  successAlert(title: string, text: string, route: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      confirmButtonText: 'OK'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.router.navigate([route]);
      }});
  }

  errorAlert(title: string, text: string, route: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      confirmButtonText: 'OK'
    })
    .then((result) => {
      if (result.isConfirmed) {
        this.router.navigate([route]);
      }});
  }

  confirmAlert(title: string | undefined, text: string, confirmButtonText: string = 'confimar', cancelButtonText: string = 'cancelar') {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    });
  }

}
