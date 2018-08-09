import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  setItem(key:string,value:string){
    sessionStorage.setItem(key,value);
  }

  getItem(key:string):string{
    return sessionStorage.getItem(key);
  }
}
