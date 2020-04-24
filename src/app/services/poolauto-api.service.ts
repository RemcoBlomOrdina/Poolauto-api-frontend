import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {observable, Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PoolautoApiService {

  constructor(private http:HttpClient) { }

  getCar(userInput) {
    console.log('userInput: ' + userInput);
    return this.http.get('http://localhost:8080/api/v1/cars/' + userInput);
  }
}
