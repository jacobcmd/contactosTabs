import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  personas:Array<any>
  constructor() { 
    this.personas=[]
  }
}
