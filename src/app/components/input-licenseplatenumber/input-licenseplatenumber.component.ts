import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PoolautoApiService} from "../../services/poolauto-api.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'pool-input-licenseplatenumber',
  templateUrl: './input-licenseplatenumber.component.html',
  styleUrls: ['./input-licenseplatenumber.component.css']
})
export class InputLicenseplatenumberComponent implements OnInit {

  public inputPlaceholder = 'Kenteken';
  public submitButtonText = 'Opvragen';
  public userInput = '';
  public errorMessageText = '';
  @Output() receivedPoolauto: EventEmitter<object> = new EventEmitter<object>();

  constructor(private poolautoApiService: PoolautoApiService) {}

  ngOnInit(): void {}

  getCars(): void {
    this.poolautoApiService.getCar(this.userInput).subscribe(
      data => {
        this.receivedPoolauto.emit(data);
      },
      err => this.handleError(err)
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

  setUserInput(userInput: string) {
    this.userInput = userInput
  }

  private isUserInputValid(): boolean {
    this.userInput.replace("-", "");
    return (this.userInput.length == 6) && (this.userInput.match(/^[0-9a-zA-Z]+$/) !== null);
  }

  private handleError(error: HttpErrorResponse) {
    this.errorMessageText = error.error.oorzaak;
  }
}
