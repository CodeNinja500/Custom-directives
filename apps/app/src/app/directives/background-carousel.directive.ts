import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[bgCarousel]' })
export class BackgroundCarouselDirective implements OnInit {
  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {}

  @Input() bgCarousel: string[] = [];

  @Output() currentIndex: number = 0;

  @HostListener('document: keyup', ['$event'])
  onKeyUp(e: KeyboardEvent) {
    const keyCode = e.key;

    if (keyCode === 'ArrowLeft' && this.bgCarousel.length > 0) {
      //LEFT
      this.currentIndex =
        this.currentIndex == 0
          ? this.bgCarousel.length - 1
          : this.currentIndex - 1;
      this._renderer2.setStyle(
        this._elementRef.nativeElement,
        'background-color',
        this.bgCarousel[this.currentIndex]
      );
    }
    if (keyCode === 'ArrowRight' && this.bgCarousel.length > 0) {
      //RIGHT
      this.currentIndex =
        this.currentIndex == this.bgCarousel.length - 1
          ? 0
          : this.currentIndex + 1;

      this._renderer2.setStyle(
        this._elementRef.nativeElement,
        'background-color',
        this.bgCarousel[this.currentIndex]
      );
    }
  }

  ngOnInit(): void {
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      this.bgCarousel[this.currentIndex]
    );
  }
}
