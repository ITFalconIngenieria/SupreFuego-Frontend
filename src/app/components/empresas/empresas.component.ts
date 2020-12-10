import { Component, OnInit, ViewChild } from '@angular/core';

//models
import { cuartoBomba } from '../../models/CuartoBomba'

//services

//material
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'description', 'actions'];
  dataSource: MatTableDataSource<cuartoBomba>;
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
