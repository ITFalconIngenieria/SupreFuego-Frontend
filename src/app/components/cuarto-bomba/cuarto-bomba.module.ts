import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CuartoBombaComponent } from './cuarto-bomba.component';

//angular material
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'; 

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CuartoBomba',
      urls: [
        { title: 'CuartoBomba', url: '/cuartobomba' },
        { title: 'CuartoBomba' }
      ]
    },
    component: CuartoBombaComponent 
  }
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
  ],
  declarations: [
    CuartoBombaComponent,
  ],
  providers: [
  ]
})

export class CuartoBombaModule { }