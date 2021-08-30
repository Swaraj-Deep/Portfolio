import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements AfterViewInit {

  @Input() text: string = 'Provide Text Here';
  @Input() greeting: string = '';
  @Input() words: string[] = ['Software Developer'];

  @ViewChild('HTMLTypingElement', {
    static: false,
    read: ElementRef
  }) htmlTypingElement !: ElementRef<HTMLHeadingElement>;

  constructor() {
  }

  private type(words: string[], typingElement: HTMLHeadingElement, count: number = 0, index: number = 0, currText: string = '',
               currLetter: string = '') {
    if (count === words.length) {
      count = 0;
    }
    currText = words[count];
    currLetter = currText.slice(0, ++index);
    typingElement.textContent = currLetter;
    if (currLetter.length === currText.length) {
      count++;
      index = 0;
    }
    setTimeout(() => {
      this.type(words, typingElement, count, index, currText, currLetter);
    }, 500);
  }

  ngAfterViewInit(): void {
    if (!this.text) {
      const typingElement = this.htmlTypingElement.nativeElement;
      this.type(this.words, typingElement);
    }
  }

}
