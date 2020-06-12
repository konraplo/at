import { Component, OnInit, AfterContentInit, Input, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log('text content' + this.header.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log('paragraph content ' + this.paragraph.nativeElement.textContent);
  }
}
