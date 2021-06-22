import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: Producto[] = [];
  prodFiltrado: Producto[] = [];
  
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    
    return new Promise( ( resolve, reject ) => {
      this.http.get('https://angular-html-ace8a-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
          this.producto = resp;
          this.cargando = false;
          resolve;
        });
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-ace8a-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }
  
  buscarProd(termino: string) {
    if (this.producto.length === 0) {
      //esperar
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos( termino );
    }
  }
  
  private filtrarProductos(terrmino: string) {
    this.prodFiltrado = [];
    this.producto.forEach(prod => {
      if (prod.categoria.indexOf(terrmino) >= 0 || prod.titulo.indexOf(terrmino)>=0) {
        this.prodFiltrado.push(prod);
        console.log(this.prodFiltrado);
      }
    });
  }
  
}
