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
    this.breakpoint = this.calcBreakPoint();
    //For onScroll hide/show
    this.data.currentMessage.subscribe(message => this.message = message)
    this.data.changeMessage("ShowHeader");
  }
  onResize(event) {
    this.breakpoint = this.calcBreakPoint();
  }
  //TODO convert this func() as a service
  calcBreakPoint(){
    if(window.innerWidth <= 770){ //xs
      return this.breakpoint = 2;
    }
    else if(window.innerWidth >= 770 && window.innerWidth <= 991){ //sm
      return this.breakpoint = 3;
    }
    else if(window.innerWidth >= 992 && window.innerWidth <= 1440){ //md
      return this.breakpoint = 4;
    }
    else //lg
    {
      return this.breakpoint = 8;
    }
  }
  toggleToolbar(event){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    //TODO : Do not send the msg every time, send the msg only when there is a change in scroll direction - otherwise will lead to performance issue
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