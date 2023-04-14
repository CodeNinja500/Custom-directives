import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[moveable]' })
export class MovableDirective {
  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {}

  isMouseDown: boolean = false;
  firstClick = true;

  xInitialPos: number = 0;
  yInitialPos: number = 0;

  xOffset: number = 0;
  yOffset: number = 0;

  xCurrent: number = 0;
  yCurrent: number = 0;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    if (this.firstClick) {
      console.log(
        'mouse clicked',
        event.offsetX,
        event.offsetY,
        event.clientX,
        event.clientY
      );
      this.xInitialPos = event.clientX - event.offsetX;
      this.yInitialPos = event.clientY - event.offsetY;
      this.firstClick = false;
    }
    this.xOffset = event.offsetX;
    this.yOffset = event.offsetY;
  }
  @HostListener('document: mousemove', ['$event'])
  move(event: MouseEvent) {
    if (this.isMouseDown) {
      this.xCurrent = event.clientX - this.xOffset;
      this.yCurrent = event.clientY - this.yOffset;

      this._renderer2.setStyle(
        this._elementRef.nativeElement,
        'transform',
        `translate3d(${this.xCurrent - this.xInitialPos}px, ${
          this.yCurrent - this.yInitialPos
        }px, 0)`
      );
    }
  }
  @HostListener('document: mouseup', ['$event'])
  stop(event: MouseEvent) {
    this.isMouseDown = false;
  }
}
