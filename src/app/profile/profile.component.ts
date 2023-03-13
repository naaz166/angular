import { UserService } from './../service/user.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  users: any;
  users$: any;

  constructor(private UserService: UserService) {
  
  }
  ngOnInit(): void {
  
    this.users$ = this.UserService.profile().subscribe((data) => {
      console.log("data",data)
      this.users = data;
    });
  }
}
  
    
    
   
   

