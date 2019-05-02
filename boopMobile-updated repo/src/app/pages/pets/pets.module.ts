import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPet } from '../pets/petreg/petreg.page';
import { UpdatePet } from '../pets/petupdate/petupdate.page';

import { IonicModule } from '@ionic/angular';

import { PetsPage } from './pets.page';

const routes: Routes = [
  {
    path: '',
    component: PetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PetsPage, RegisterPet, UpdatePet],
  entryComponents: [RegisterPet, UpdatePet]
})
export class PetsPageModule {}
