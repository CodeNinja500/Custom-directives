import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({ selector: 'input[blockPaste],textarea[blockPaste]' })
export class BlockPasteDirective {
  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {}

  @HostListener('paste', ['$event'])
  blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }
  // TO też działa ale testy nie przechodzą...
  // ngOnInit(): void {
  //   this._renderer2.setAttribute(
  //     this._elementRef.nativeElement,
  //     'onpaste',
  //     'return false'
  //   );
  // }
}
