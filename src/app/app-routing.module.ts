import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'calculator', pathMatch: 'full'},
  {path: 'calculator', loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
