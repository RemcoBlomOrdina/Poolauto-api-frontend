import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pool-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title = 'Poolauto Data';

  constructor() { }

  ngOnInit(): void {
  }

}
