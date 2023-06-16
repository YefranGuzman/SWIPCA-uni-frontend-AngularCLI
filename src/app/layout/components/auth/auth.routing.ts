import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
      },
    ]),
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule {
}
