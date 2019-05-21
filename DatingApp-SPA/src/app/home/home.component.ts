import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  // values: any; <- used for parent to child component communication

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getValues(); <- used for parent to child component communication
  }

  registerToggle(){
    this.registerMode = true;
  }

/* <- used for parent to child component communication
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }
*/

  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }

}
