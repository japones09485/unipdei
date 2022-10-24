import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginComponent } from './components/login/login.component';
import { MenulateralComponent } from './admin/menulateral/menulateral.component';
import { CabeceraComponent } from './admin/cabecera/cabecera.component';
import { CarrerasComponent } from './admin/carreras/carreras.component';
import { HeaderComponent } from './admin/header/header.component';
import { CursosComponent } from './admin/cursos/cursos.component';
import { DiplomadosComponent } from './admin/diplomados/diplomados.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { ProfesoresComponent } from './admin/profesores/profesores.component';
import { AlumnosComponent } from './admin/alumnos/alumnos.component';
import { CarreraComponent } from './admin/carreras/carrera/carrera.component';
import { CursoComponent } from './admin/cursos/curso/curso.component';
import { DiplomadoComponent } from './admin/diplomados/diplomado/diplomado.component';
import { UsuarioComponent } from './admin/usuarios/usuario/usuario.component';
import { ProfesorComponent } from './admin/profesores/profesor/profesor.component';
import { AlumnoComponent } from './admin/alumnos/alumno/alumno.component';
import { ConfirmacionComponent } from './admin/confirmacion/confirmacion.component';
import { RestabPaswComponent } from './components/restab-pasw/restab-pasw.component';
import { ProgramaComponent } from './admin_prof/programa/programa.component';
import { HomeproComponent } from './admin_prof/homepro/homepro.component';
import { TooltipComponent } from './shared/tooltip/tooltip.component';
import { ProgramasProfComponent } from './admin/programas-prof/programas-prof.component';
import { MenuPrfComponent } from './shared/menu-prf/menu-prf.component';
import { ExamenesComponent } from './admin_prof/examenes/examenes.component';
import { ExamenComponent } from './admin_prof/examenes/examen/examen.component';
import { PreguntasComponent } from './admin_prof/examenes/preguntas/preguntas.component';
import { AlumRecuperacionComponent } from './admin_prof/examenes/alum-recuperacion/alum-recuperacion.component';
import { RespuestasComponent } from './admin_prof/examenes/respuestas/respuestas.component';
import { ResultadosComponent } from './admin_prof/examenes/resultados/resultados.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrabajosComponent } from './admin_prof/trabajos/trabajos.component';
import { TrabajoComponent } from './admin_prof/trabajos/trabajo/trabajo.component';
import { ExamenesalumComponent } from './admin_alum/examenesalum/examenesalum.component';
import { PresentarexComponent } from './admin_alum/examenesalum/presentarex/presentarex.component';
import { DetalleComponent } from './admin_prof/examenes/resultados/detalle/detalle.component';
import { VideosComponent } from './admin_prof/videos/videos.component';
import { VideoComponent } from './admin_prof/videos/video/video.component';
import { VideoBComponent } from './admin_alum/video-b/video-b.component';
import { VideosalumComponent } from './admin_alum/videosalum/videosalum.component';
import { CargarTrabajosComponent } from './admin_alum/cargar-trabajos/cargar-trabajos.component';
import { CargadosAlumComponent } from './admin_prof/trabajos/cargados-alum/cargados-alum.component';
import { ClasesComponent } from './admin_prof/clases/clases.component';
import { ClaseComponent } from './admin_prof/clases/clase/clase.component';
import { ClasesAlumnoComponent } from './admin_alum/clases-alumno/clases-alumno.component';
import { ConferenciaComponent } from './admin_alum/conferencia/conferencia.component';
import { RelProgrammasComponent } from './admin/alumnos/rel-programas/rel-programas.component';
import { InscribirProgComponent } from './admin/alumnos/rel-programas/inscribir-prog/inscribir-prog.component';
import { AllprogramasComponent } from './components/allprogramas/allprogramas.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuHomeComponent,
    LoadingComponent,
    LoginComponent,
    MenulateralComponent,
    CabeceraComponent,
    CarrerasComponent,
    HeaderComponent,
    CursosComponent,
    DiplomadosComponent,
    UsuariosComponent,
    ProfesoresComponent,
    AlumnosComponent,
    CarreraComponent,
    CursoComponent,
    DiplomadoComponent,
    UsuarioComponent,
    ProfesorComponent,
    AlumnoComponent,
    ConfirmacionComponent,
    RestabPaswComponent,
    ProgramaComponent,
    HomeproComponent,
    TooltipComponent,
    ProgramasProfComponent,
    MenuPrfComponent,
    ExamenesComponent,
    ExamenComponent,
    PreguntasComponent,
    AlumRecuperacionComponent,
    RespuestasComponent,
    ResultadosComponent,
    TrabajosComponent,
    TrabajoComponent,
    ExamenesalumComponent,
    PresentarexComponent,
    DetalleComponent,
    VideosComponent,
    VideoComponent,
    VideoBComponent,
    VideosalumComponent,
    CargarTrabajosComponent,
    CargadosAlumComponent,
    ClasesComponent,
    ClaseComponent,
    ClasesAlumnoComponent,
    ConferenciaComponent,
    RelProgrammasComponent,
    InscribirProgComponent,
    AllprogramasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
