import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WifiConnectionIntroPageComponent } from './pages/wifi-connection-intro-page/wifi-connection-intro-page.component';
import { WifiConnectionComponent } from './pages/wifi-connection/wifi-connection.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'intro',
        component: WifiConnectionIntroPageComponent,
        pathMatch: 'full'	
    },
    {
        path: 'wifi-connection',
        component: WifiConnectionComponent,
        pathMatch: 'full'	
    }
];
