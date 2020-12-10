import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro.component';

//angular material
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'; 
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'registro',
      urls: [
        { title: 'registro', url: '/registro' },
        { title: 'registro' }
      ]
    },
    component: RegistroComponent 
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
    MatIconModule
  ],
  declarations: [
    RegistroComponent,
  ],
  providers: [
  ]
})

export class RegistroModule { }