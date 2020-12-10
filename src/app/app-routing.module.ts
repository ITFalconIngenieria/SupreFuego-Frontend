import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//main components
import { LoginComponent } from './components/main/login/login.component'
import { ToolbarComponent } from './components/main/toolbar/toolbar.component'
import { InicioComponent } from './components/main/inicio/inicio.component';

//modules
import { CuartoBombaModule } from './components/cuarto-bomba/cuarto-bomba.module'
import { EmpresasModule } from './components/empresas/empresas.module'
import { GrupoUsuarioModule } from './components/grupo-usuario/grupo-usuario.module'
import { SenalesModule } from './components/senales/senales.module'
import { SetPointsModule } from './components/setpoints/setpoints.module'
import { SitiosModule } from './components/sitios/sitios.module'
import { TanquesAguaModule } from './components/tanques-agua/tanques-agua.module'
import { TipoMotorModule } from './components/tipo-motor/tipo-motor.module'
import { UnidadesModule } from './components/unidades/unidades.module'
import { UsuariosModule } from './components/usuarios/usuarios.module'
import { EnVivoModule } from './components/envivo/envivo.module'
import { RegistroComponent } from './components/main/registro/registro.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'registro', component: RegistroComponent},
  {
    path: '', component: ToolbarComponent,
    children: [
       {path: 'cuartoBomba', loadChildren: ()=> CuartoBombaModule},
       {path: 'empresas', loadChildren: ()=> EmpresasModule},
       {path: 'grupoUsuario', loadChildren: ()=> GrupoUsuarioModule},
       {path: 'senales', loadChildren: ()=> SenalesModule},
       {path: 'setpoint', loadChildren: ()=> SetPointsModule},
       {path: 'sitios', loadChildren: ()=> SitiosModule},
       {path: 'tanquesAgua', loadChildren: ()=> TanquesAguaModule},
       {path: 'tipoMotor', loadChildren: ()=> TipoMotorModule},
       {path: 'unidades', loadChildren: ()=> UnidadesModule},
       {path: 'usuarios', loadChildren: ()=> UsuariosModule},
       {path: 'envivo', loadChildren: ()=>EnVivoModule},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
