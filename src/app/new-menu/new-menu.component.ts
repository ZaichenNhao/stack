import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['./new-menu.component.css']
})
export class NewMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    var curtain = document.getElementById('curtain');
    curtain.classList.toggle('active')
  }
}
