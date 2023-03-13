import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  login(data: any) {
    this.http.post("https://hire-our-grads-backend.azurewebsites.net/test/login", data).subscribe((result: any) => {
   
      localStorage.setItem("token", result.token)
      this.router.navigate(['/profile'])
    })

  }
  profile() {
    let headers = new HttpHeaders()
      .set("Authorization", `${localStorage.getItem('token')}`);
    return this.http.get("https://hire-our-grads-backend.azurewebsites.net/test/list", { headers})
    
  }
}
