import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bshowHeader:boolean;

  constructor(private data: DataService) { 
  }
  ngOnInit() {
    this.bshowHeader = true;

    this.data.currentMessage.subscribe(message => {
      if(message == "ShowHeader")
        this.showHeader();
      else if (message == "HideHeader")
        this.hideHeader();
    })
  }
  hideHeader(){
    this.bshowHeader = false;
  }
  showHeader(){
    this.bshowHeader = true;
  }
}
