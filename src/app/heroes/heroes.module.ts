import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


@NgModule({
  declarations: [//Declarar componentes en el archivo module.ts correspondiente a su carpeta es crucial para mantener el código limpio y manejable.
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }