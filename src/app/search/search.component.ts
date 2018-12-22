import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';  
import { DataService } from "../data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bshowSearch:boolean;
  message:string;
  @ViewChildren("search") searchFocus : ElementRef;
  setSearchFocus():void{
    this.searchFocus.nativeElement.focus();
  }
  constructor(private data: DataService) { }

  ngOnInit() {
    this.bshowSearch = false;
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.changeMessage("HideHeader");
    this.showSearch();
  }
  ngAfterViewChecked(){
    if(this.searchFocus && this.searchFocus.nativeElement){
     // this.searchFocus.nativeElement.focus();
    }
    else{
      //console.error("ERRORRRRRRRRRRR");
    }
  }
  hideSearch(): void{
    this.bshowSearch = false;
    this.showHeader();
  }
  showSearch(): void{
    this.bshowSearch = true;
  }
  showHeader(): void{
    this.data.changeMessage("ShowHeader");
  }
}
