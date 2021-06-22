import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../interfaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;

  equipo: Equipo[]

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
 }

  private cargarInfo(){
    this.http.get('assets/data/data.json').subscribe(resp => {
      this.cargada = true;  
      this.info=resp; 
    })
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-ace8a-default-rtdb.firebaseio.com/equipo.json').subscribe((resp: Equipo[]) => {
      this.equipo = resp;
    })
  }
}
