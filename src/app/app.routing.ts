import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes

import { EmpleadoComponent } from './Empleado/Empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import { HoliComponent } from './holi/holi.component';

//Rutas
const appRoutes: Routes=[ 
  {path: '', component: HomeComponent},//En caso de que no se solicite ninguna, Principal
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent}, //No recibe parametros
  {path: 'contacto/:page', component: ContactoComponent},//Recibe parametros
  {path: 'coche', component: CochesComponent},
  {path: 'holi', component: HoliComponent},
  {path: '**', component: HomeComponent}//En caso de error de url
];


export const appRoutingProviders: any[]= [];//Proceso necesario de Angular para exportar el provider 

export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes); //Estamos diciendo que array de rutas debe entregar