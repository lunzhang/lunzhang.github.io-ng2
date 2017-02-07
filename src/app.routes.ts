import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SwordComponent } from './swords/sword.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { GridComponent } from './grid/grid.component';
import { Notes } from './notes/notes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/grid',
    pathMatch: 'full'
  },
  { path: 'swords', component: SwordComponent },
  { path: 'keyboard', component: KeyboardComponent },
  { path: 'grid', component : GridComponent },
  { path: 'notes', component : Notes }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
