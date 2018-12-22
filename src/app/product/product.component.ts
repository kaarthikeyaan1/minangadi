import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private data: DataService) { 
    
  }
  breakpoint: number = 2;
  message:string;
  lastScrollTop:number = window.pageYOffset;
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 450) ? 2 : 4;
    this.data.currentMessage.subscribe(message => this.message = message)
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 450) ? 2 : 4;
  }
  toggleToolbar(event){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    //TODO : Do not send the msg every time, send the msg only when there is a change i
    if (st > this.lastScrollTop){
      // scroll down
      this.data.changeMessage("HideToolbar");
    } else {
      // scroll up
      this.data.changeMessage("ShowToolbar");
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
}