import { Component } from '@angular/core';

@Component({
  selector: 'pool-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poolauto-api-frontend';
  poolauto: object;

  onReceivedPoolauto(poolauto: object): void {
    this.poolauto = poolauto;
  }
}
