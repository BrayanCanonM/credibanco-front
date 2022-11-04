import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Tarjeta } from 'src/tarjeta';
import { Transaccion } from 'src/transaccion';
import { MatTableDataSource } from '@angular/material/table'  

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {

  LISTA_TRANSACCIONES: Transaccion[] = [];
  displayedColumns: string[] = ['idTransaccion', 'pan', 'numReferencia', 'totalCompra', 'direccionCompra', 'estadoCompra', 'fecha'];
  dataSource = new MatTableDataSource<Transaccion>(this.LISTA_TRANSACCIONES);

  public columnas: any[] = []

  constructor(private RestService:RestService) {
    
  }

  ngOnInit(): void {
    this.cargarTransaccion();

  }

  public cargarTransaccion(){
    this.RestService.get("http://localhost:8090/transaccion")
    .subscribe(respuesta => {this.dataSource.data = respuesta as Transaccion[]
    
      console.log(respuesta);}
      )
  }

}
