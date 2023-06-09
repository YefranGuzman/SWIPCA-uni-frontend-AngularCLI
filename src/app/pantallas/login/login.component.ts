import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ApiServiceService } from '../../servicios/api-service.service'
import { loginI } from 'src/app/models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl ('', Validators.required)
  })

  constructor(private api:ApiServiceService){}
  
  ngOnInit(): void {
  }

  onLogin(form: AbstractControl<loginI>) {
    const formValue: loginI = form.value;
    this.api.InicioSesion(formValue).subscribe(data => {
      console.log(data);
    });
  }
  
}
