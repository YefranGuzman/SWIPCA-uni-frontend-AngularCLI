import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { StructureModule } from 'src/app/plantillas/structure/structure.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule, CommonModule, ReactiveFormsModule, FormsModule, StructureModule],
})
export class AuthModule {}
