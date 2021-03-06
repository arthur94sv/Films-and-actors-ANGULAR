import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActorsRootComponent} from './components/actors-root/actors-root.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ActorsAddComponent} from './components/actors-add/actors-add.component';

import { ActorsDeleteComponent } from './components/actors-delete/actors-delete.component';
import { ActorsUpdateComponent } from './components/actors-update/actors-update.component';
import { AddFilmForActorComponent } from './components/add-film-for-actor/add-film-for-actor.component';


@NgModule({
  declarations: [ActorsRootComponent, ActorsAddComponent, ActorsDeleteComponent, ActorsUpdateComponent, AddFilmForActorComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  exports: [ActorsRootComponent]
})
export class ActorsModule {
}
