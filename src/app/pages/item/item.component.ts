import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProCom } from 'src/app/interfaces/productoCompleto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  producto: ProCom;
  id: string;

  constructor( private route: ActivatedRoute,
               public prod: ProductosService ) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        this.prod.getProducto(parametros['id'])
          .subscribe((produ: ProCom) => {
            this.producto = produ;
            this.id = parametros['id']
          });
      });
  }

}
