import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
@Directive({
    selector: "[tvisibility]"
  })
  export class ToolbarVisibilityDirective{
      constructor(private el:ElementRef,
                  private renderer: Renderer){  
      }
      @HostListener('scroll') onScroll(){
        window.alert('Scrolled');
      }
  }