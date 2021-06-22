import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private activRout: ActivatedRoute,
              public proSer: ProductosService  ) { }

  ngOnInit() {
    this.activRout.params
      .subscribe(params => {
        console.log(params['termino']);
        this.proSer.buscarProd(params['termino']);
      })
  }

}
