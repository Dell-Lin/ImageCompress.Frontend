import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PrimeNGCommon } from './Common/primeng.Common';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, PasswordModule, CheckboxModule, RouterLink, FormsModule, PrimeNGCommon, DividerModule],
  template: `
<div class="flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
          <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span class="text-600 font-medium line-height-3">Don't have an account?</span>
          <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
      </div>
      <div>
          <label for="email1" class="block text-900 font-medium mb-2">Email</label>
          <input id="email1" type="text" placeholder="Email address" pInputText class="w-full mb-3">

          <label for="password1" class="block text-900 font-medium mb-2">Password</label>
          <input id="password1" type="password" placeholder="Password" pInputText class="w-full mb-3">
          <button pButton pRipple label="Sign In" icon="pi pi-user" class="w-full"></button>
      </div>
      <p-divider></p-divider>
      <div>
        <button pButton pRipple label="Sign In with Line" icon="pi pi-comment" class="w-full p-button-success mb-2"></button>
        <button pButton pRipple label="Sign In with Google" icon="pi pi-google" class="w-full mb-2" (click)="onSignGoogle()"></button>
      </div>
  </div>
</div>
  `,
})
export default class LoginComponent {
  router = inject(Router);
  public password?: string;
  onSignGoogle() {
    window.location.href = "/api/Account/GoogleOAuthCallBack";
  }
}
