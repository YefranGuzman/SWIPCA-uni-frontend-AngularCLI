import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ApiServiceService } from '../../../../servicios/api-service.service';
import { loginI } from '../../../../models/login.interface';
import { responseI } from '../../../../models/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = new FormGroup({
    nick: new FormControl('', Validators.required),
    contrasena: new FormControl('', Validators.required),
  });

  constructor(private api: ApiServiceService, private router: Router) {}

  checkLocalStorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  onLogin(form: AbstractControl<loginI>) {
    const formValue: loginI = form.value;
    // this.api.InicioSesion(formValue).subscribe(data => {
    let dataresponse: responseI = {
      token: 'sadaddddassssssssssssssssssss',
      idUsuario: new Int16Array([21, 31]),
    };
    localStorage.setItem('token', dataresponse.token);
    localStorage.setItem('idUsuario', dataresponse.idUsuario.toString());
    this.router.navigate(['/dashboard']);
    // });
  }
}
