import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('loginForm1') loginForm:NgForm;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("Hellooo");
  }

}