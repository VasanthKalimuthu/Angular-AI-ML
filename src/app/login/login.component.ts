import { Component,inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, SocialUser ,GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,GoogleSigninButtonModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loggedIn: boolean = false;
  user: SocialUser | null = null;
  clientId: string = '1013082230204-oa1eanbanjlhs5nopeq21fsjao48km9f.apps.googleusercontent.com'; 
  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
 
  signOut(): void {
    this.authService.signOut();
  }
}

