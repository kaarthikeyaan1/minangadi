import { Component, OnInit, Directive, ElementRef, Renderer } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  message:string;
  visible:boolean = true;
  cssVisibleProperty:string;
  constructor(private data: DataService) { 
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => {
      if(message == "ShowToolbar")
        this.showToolbar();
      else if(message == "HideToolbar")
        this.hideToolbar();
      else
        this.showToolbar();
    })
  }

  toggleToolbar(){
    this.visible = ! this.visible;
  }
  showToolbar(){
    this.visible = true;
  }
  hideToolbar(){
    this.visible = false;
  }
  getVisibility(){
    return this.visible ? "visible" : "hidden" ;
  }
}