import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizationPage } from './visualization.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizationPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VisualizationPageRoutingModule {}
