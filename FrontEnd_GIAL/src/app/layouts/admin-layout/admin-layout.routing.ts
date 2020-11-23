import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { MapaFisicoComponent } from 'app/mapa-fisico/mapa-fisico.component';
import { MapaHidrografiaComponent } from 'app/mapa-hidrografia/mapa-hidrografia.component';
import { MapaOrografiaComponent } from 'app/mapa-Orografia/mapa-Orografia.component';
import { MapaPoliticoComponent } from 'app/mapa-Politico/mapa-Politico.component';
import { GeneralidadComponent } from 'app/generalidad/generalidad.component';
import { RegionComponent } from 'app/region/region.component';
import { AspectoFisicoComponent } from 'app/aspecto-Fisico/aspecto-Fisico.component';
import { TendenciasComponent } from 'app/tendencias/tendencias.component';
import { GeneralidadPoblacionComponent } from 'app/generalidad-poblacion/generalidad-poblacion.component';
import { BreveHistoriaComponent } from 'app/breve-historia/breve-historia.component';
import { DemografiaComponent } from 'app/demografia/demografia.component';
import { GobiernoComponent } from 'app/gobierno/gobierno.component';
import { EconomiaComponent } from 'app/economia/economia.component';
import { CulturaComponent } from 'app/cultura/cultura.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',            component: HomeComponent },
    { path: 'mapaFisico',           component: MapaFisicoComponent },
    { path: 'mapaHidrografia',      component: MapaHidrografiaComponent },
    { path: 'mapaPolitico',         component: MapaPoliticoComponent },
    { path: 'mapaOrografia',        component: MapaOrografiaComponent },
    { path: 'generalidad',          component: GeneralidadComponent },
    { path: 'region',               component: RegionComponent },
    { path: 'aspectoFisico',        component: AspectoFisicoComponent },
    { path: 'tendencias',           component: TendenciasComponent },
    { path: 'generalidadPoblacion', component: GeneralidadPoblacionComponent },
    { path: 'breveHistoria',        component: BreveHistoriaComponent },
    { path: 'demografia',           component: DemografiaComponent },
    { path: 'gobierno',             component: GobiernoComponent },
    { path: 'economia',             component: EconomiaComponent },
    { path: 'cultura',              component: CulturaComponent },


];
