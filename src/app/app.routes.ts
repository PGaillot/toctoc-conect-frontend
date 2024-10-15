import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WifiConnectionIntroPageComponent } from './pages/wifi-connection-intro-page/wifi-connection-intro-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'intro',
        component: WifiConnectionIntroPageComponent,
        pathMatch: 'full'	
    }
];
