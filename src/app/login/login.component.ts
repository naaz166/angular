import { UserService } from './../service/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private UserService: UserService) {
    
  }
  userLogin(data: any) {
    console.warn(data);
    this.UserService.login(data);
  }

}
