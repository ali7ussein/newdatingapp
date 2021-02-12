
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dating App';
  users: any;
  constructor(private http:HttpClient)
  {

  }
  ngOnInit() {
    this.http.get('https://localhost:5001/api/users').subscribe(reponse => {
      this.users = reponse;

    } , error => {
      console.log(error);
      
    });
  }
}
