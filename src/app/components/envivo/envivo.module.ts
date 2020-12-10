import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EnvivoComponent } from './envivo.component';

//angular material
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'; 
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Envivo',
      urls: [
        { title: 'Envivo', url: '/Envivo' },
        { title: 'Envivo' }
      ]
    },
    component: EnvivoComponent 
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
    MatSelectModule
  ],
  declarations: [
    EnvivoComponent,
  ],
  providers: [
  ]
})

export class EnVivoModule { }