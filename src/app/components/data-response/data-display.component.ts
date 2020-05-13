import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PoolautoApiService} from "../../services/poolauto-api.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'pool-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit, OnChanges {

  public copyButtonText = 'Kopieer naar klembord';
  public textAreaValue = '';
  public errorMessageText = '';
  @Input() poolauto: object;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.poolauto != null || undefined) {
      this.textAreaValue = DataDisplayComponent.formatJSONToTable(this.poolauto);
    }
  }

  private static formatJSONToTable(json: object): string {
    let data = JSON.stringify(json);
    data = data.replace("{","");
    data = data.replace("}","");
    data = data.replace(/"/g,"");
    data = data.replace(/:/g,": ");
    data = data.replace(/,/g,"\n");
    return data;
  }
}
