import { Component, OnInit } from '@angular/core';

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
  constructor() { }
  private breakpoint: number = 2;
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 450) ? 2 : 4;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 450) ? 2 : 4;
  }
}