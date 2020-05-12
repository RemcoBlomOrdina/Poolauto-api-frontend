import { Component, OnInit } from '@angular/core';
import {PoolautoApiService} from "../../services/poolauto-api.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'pool-data-response',
  templateUrl: './data-response.component.html',
  styleUrls: ['./data-response.component.css']
})
export class DataResponseComponent implements OnInit {

  public poolauto = null;
  public copyButtonText = 'Kopieer naar klembord';
  public textAreaValue = '';
  public errorMessageText = '';
  public userInput = '';

  constructor(private poolautoApiService: PoolautoApiService) { }

  ngOnInit(): void {
  }

  getCars(): void {
    this.poolautoApiService.getCar(this.userInput).subscribe(
      data => {
        this.poolauto = data;
        this.errorMessageText = '';
        this.textAreaValue = DataResponseComponent.formatJSONToTable(data);
      },
      err => this.handleError(err)
    );
  }

  private static formatJSONToTable(json: Object): string {
    let data = JSON.stringify(json);
    data = data.replace("{","");
    data = data.replace("}","");
    data = data.replace(/"/g,"");
    data = data.replace(/:/g,": ");
    data = data.replace(/,/g,"\n");
    return data;
  }

  private handleError(error: HttpErrorResponse) {
    this.errorMessageText = error.error.oorzaak;
    this.textAreaValue = '';
    this.poolauto = null;
  }

}
