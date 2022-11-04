import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Tarjeta } from 'src/tarjeta';
import { MatTableDataSource } from '@angular/material/table'  



@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  LISTA_TARJETAS: Tarjeta[] = [];
  displayedColumns: string[] = ['idTarjeta', 'cedula', 'estado', 'numValidacion', 'numeroTarjeta', 'telefono', 'tipo', 'titular'];
  dataSource = new MatTableDataSource<Tarjeta>(this.LISTA_TARJETAS);


  public columnas: any[] = []

  constructor(private RestService:RestService) {
    
   }

  ngOnInit(): void {
    this.cargarTarjetas();

  }

  public cargarTarjetas(){
    this.RestService.get("http://localhost:8090/tarjeta")
    .subscribe(respuesta => {this.dataSource.data = respuesta as Tarjeta[]
    
      console.log(respuesta);}
      )
  }

}
/**
 *  {
      console.log(respuesta);
      
      this.columnas = [
        {titulo: "ID", name: "idTarjeta"},
        {titulo: "Cédula", name: "cedula"},
        {titulo: "Número Tarjeta", name: "numeroTarjeta"},
        {titulo: "Teléfono", name: "telefono"},
        {titulo: "Tipo", name: "tipo"},
        {titulo: "Titular", name: "titular"},
      ];

      
    })
 */