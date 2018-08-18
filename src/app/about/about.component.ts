import { Component, OnInit ,Input } from '@angular/core';

import { Hero } from '../hero';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
   @Input() akhil: Hero;
   // convert akhil to Hero type...ie..id and name.....akhil.id...akhil.name
  
   
  
  

  constructor() { }

  ngOnInit() {
  }

}
