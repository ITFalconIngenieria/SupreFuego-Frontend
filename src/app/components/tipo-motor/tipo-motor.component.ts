import { Component, OnInit, ViewChild } from '@angular/core';

//models

//services

//material
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-tipo-motor',
  templateUrl: './tipo-motor.component.html',
  styleUrls: ['./tipo-motor.component.css']
})
export class TipoMotorComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'description', 'actions'];
  dataSource: MatTableDataSource<any>;
  cuartosBomba: null;


  constructor() { 
    this.dataSource = new MatTableDataSource(this.cuartosBomba);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
