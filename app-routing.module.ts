import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumoComponent } from './resumo/resumo.component';

let routes = [
  { path : "resumo", component: ResumoComponent},
  { path : "**", redirecTo:"/resumo"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
