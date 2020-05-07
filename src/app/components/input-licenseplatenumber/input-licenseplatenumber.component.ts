import { Component, OnInit } from '@angular/core';
import {PoolautoApiService} from "../../services/poolauto-api.service";
import {ClipboardModule} from "@angular/cdk/clipboard";

@Component({
  selector: 'pool-input-licenseplatenumber',
  templateUrl: './input-licenseplatenumber.component.html',
  styleUrls: ['./input-licenseplatenumber.component.css']
})
export class InputLicenseplatenumberComponent implements OnInit {

  public title = 'poolauto data';
  public inputPlaceholder = 'Kenteken';
  public submitButtonText = 'Opvragen';
  public copyButtonText = 'Kopieer naar klembord'
  public poolauto = null;
  public userInput = '';
  public errorMessageText = '';
  public textAreaValue = '';

  constructor(private poolautoApiService: PoolautoApiService) {}

  ngOnInit(): void {}

  getCars(): void {
    this.poolautoApiService.getCar(this.userInput).subscribe(
      data => {
        this.poolauto = data;
        this.textAreaValue = InputLicenseplatenumberComponent.formatJSONToTable(data);
      },
      err => console.error(err),
      () => console.log('car loaded')
    );
  }

  onSubmitButtonClick(): void {
    this.errorMessageText = '';
    if(this.isUserInputValid()) {
      this.getCars();
    } else {
      this.errorMessageText = 'Invoer ongeldig. Kenteken bestaat uit 6 letters en cijfers.'
    }
  }

  onCopyButtonClick(): void {
    //copy to clipboard
  }

  setUserInput(userInput: string) {
    this.userInput = userInput
  }

  private isUserInputValid(): boolean {
    this.userInput.replace("-", "");
    return (this.userInput.length == 6) && (this.userInput.match(/^[0-9a-zA-Z]+$/) !== null);
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
}
