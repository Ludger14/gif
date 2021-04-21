import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from '../app/gif/gif.component';
import { PesquisarComponent } from '../app/pesquisar/pesquisar.component';

const routes: Routes = [
  { path: '', component: PesquisarComponent },
  { path: 'resultado/:q', component: GifComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
