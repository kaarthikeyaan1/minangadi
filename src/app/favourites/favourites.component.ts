import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit{

  constructor(private data: DataService) { }
  
  //TODO change this to interface
 breakpoint = {
  breakpointMain:2,
  breakpointImage:1,
  breakpointContent:1
}
 
  ngOnInit() {
    //this.breakpointMain = this.calcBreakPoint();

    this.data.changeMessage("ShowHeader");
    this.calcBreakPoint();
  }
  onResize(event) {
    this.calcBreakPoint();
  }
  calcBreakPoint(){
    if(window.innerWidth <= 1199){ //xs sm md
      this.breakpoint.breakpointMain = 2;
      this.breakpoint.breakpointImage = 1;
      this.breakpoint.breakpointContent = 1;
    }
    else //lg
    {
      this.breakpoint.breakpointMain = 6;
      this.breakpoint.breakpointImage = 1;
      this.breakpoint.breakpointContent = 5;
    }
  }
}
