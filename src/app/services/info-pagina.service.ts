import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/data/data.json').subscribe(resp => {
      this.cargada = true;  
      this.info=resp;
      console.log(resp);
      
        
    })
 }
}
