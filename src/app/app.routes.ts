import { Routes } from '@angular/router';
import { SdkComponent } from './sdk/sdk.component';
import { MbComponent } from './mb/mb.component';

export const routes: Routes = [
  {
    path: 'sdks',
    component: SdkComponent,
  },
  {
    path: 'mb',
    component: MbComponent,
  },
  {
    path: '',
    component: SdkComponent,
    pathMatch: 'full',
  },
];
