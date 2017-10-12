import { Component, ViewChild, OnInit, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: 'accordionController.html'
})
export class AccordionController implements OnInit {

  public accordionExapanded: boolean = false;
  @ViewChild('cc') cardContent: any;

  @Input('headerColor') headerColor: string = 'primary';
  @Input('iconArrowColor') iconArrowColor: string = 'light';
  @Input('iconColor') iconColor: string = 'light';
  @Input('iconName') iconName: string;
  @Input('contentColor') contentColor: string = 'light';
  @Input('title') title: string;
  @Input('open') openInit: string;

  protected icon: string = "arrow-forward";

  constructor(public renderer: Renderer2) {
    
  }

  ngOnInit() {
    this.renderer.setStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    
    if (this.openInit == "true") {
      this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.accordionExapanded = true;
      this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    }
  }

  public toggleAccordion(isOpen?: boolean) {
    if (this.accordionExapanded) {
      this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "0px");

    } else {
      this.renderer.setStyle(this.cardContent.nativeElement, "max-height", "500px");
    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

}
