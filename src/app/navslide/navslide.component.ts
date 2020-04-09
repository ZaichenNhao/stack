import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navslide',
  templateUrl: './navslide.component.html',
  styleUrls: ['./navslide.component.css']
})
export class NavslideComponent implements OnInit {

  ngOnInit(): void {
  }

  toggle(){
    var curtain = document.getElementById('curtain');
    curtain.classList.toggle('active')
  }

  constructor(private router:Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);

  }
  }
}
