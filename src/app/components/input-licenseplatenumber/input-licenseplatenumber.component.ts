import { Component, OnInit } from '@angular/core';
import {PoolautoApiService} from "../../services/poolauto-api.service";
import {AbstractControl, PatternValidator, ValidationErrors} from "@angular/forms";

@Component({
  selector: 'pool-input-licenseplatenumber',
  templateUrl: './input-licenseplatenumber.component.html',
  styleUrls: ['./input-licenseplatenumber.component.css']
})
export class InputLicenseplatenumberComponent extends PatternValidator implements OnInit {

  public poolauto = null;
  public userInput = '';

  constructor(private poolautoApiService: PoolautoApiService) {
    super();
  }

  ngOnInit(): void {
  }

  getCars(): void {
    if(this.isUserInputValid()) {
      this.poolautoApiService.getCar(this.userInput).subscribe(
        data => {
          console.log(data);
          this.poolauto = data;
        },
        err => console.error(err),
        () => console.log('car loaded')
      );
    } else {
      console.log("input invalid");
    }
  }

  setUserInput(userInput: string) {
    this.userInput = userInput;
  }

  private isUserInputValid(): boolean {
    let isValid = true;
    this.userInput.replace("-", "");
    isValid = (this.userInput.length == 6);
    console.log(isValid);
    isValid = (this.userInput.match(/^[0-9a-zA-Z]+$/) !== null);
    console.log(this.userInput.match(/^[0-9a-zA-Z]+$/));
    return isValid;
  }
}
