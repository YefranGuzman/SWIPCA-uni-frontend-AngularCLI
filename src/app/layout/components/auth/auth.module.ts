import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from 'src/app/plantillas/header/header.component';
import { FooterComponent } from 'src/app/plantillas/footer/footer.component';

@NgModule({
  declarations: [LoginComponent, HeaderComponent, FooterComponent],
  imports: [AuthRoutingModule, CommonModule, ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
