import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
constructor(private http:HttpClient){

}
username:string='';
email:string='';
password:string='';
register(){
  let bodyData = {
    "username":this.username,
    "email":this.email,
    "password":this.password

  };
  this.http.post("http://localhost:8081/api/v1/employee",bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Siz muvafaqiyatli ro'yhatdan o'tdingiz")
      
      this.username='';
      this.email='';
      this.password='';
    });
}
save(){
  this.register();
}
}
