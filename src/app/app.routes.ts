import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WifiConnectionIntroPageComponent } from './pages/wifi-connection-intro-page/wifi-connection-intro-page.component';
import { WifiConnectionComponent } from './pages/wifi-connection/wifi-connection.component';
import { WifiConnectionLogComponent } from './pages/wifi-connection-log/wifi-connection-log.component';
import { WifiConnectionPendingComponent } from './pages/wifi-connection-pending/wifi-connection-pending.component';

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
    },
    {
        path:'wifi-log/:ssid', 
        component:WifiConnectionLogComponent,
    },
    {
        path:'wifi-connection-pending', 
        component:WifiConnectionPendingComponent,
    },
];
