import { Component, OnInit } from '@angular/core';

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
}
