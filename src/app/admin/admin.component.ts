import { Component, OnInit ,Input} from '@angular/core';
import { Hero } from '../hero';

import { HEROES } from '../hero1';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() hero: Hero;

  heroes = HEROES;//takes datas from  hero1 {.......}



  hero1: Hero = {//Hero class name and hero object name
    id: 1,
    name: 'Windstorm'  
  };

  selectedHero: Hero;//pass the type of Hero to selectedHero

  //onSelect(akhil: Hero): void {
    //this.selectedHero = akhil;
   // console.log(akhil);
  //}
 
 


  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero ){
    //console.log(akhil);
    this.selectedHero= hero;
  }

}
