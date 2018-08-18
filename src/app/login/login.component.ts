import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() akhil: Hero;



  name: String;

  constructor() { }

  ngOnInit() {
  }

}
