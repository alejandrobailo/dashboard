import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarOutput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  toggleSideBar() {
    this.toggleSideBarOutput.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}
