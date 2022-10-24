import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { GuardAutGuard } from './services/guard-aut.guard';
import { AllprogramasComponent } from "./components/allprogramas/allprogramas.component";
import { LoginComponent } from "./components/login/login.component";
import { RestabPaswComponent } from "./components/restab-pasw/restab-pasw.component";
//componentes admin
import { CarrerasComponent } from "./admin/carreras/carreras.component";
import { CarreraComponent } from "./admin/carreras/carrera/carrera.component";
import { CursosComponent } from "./admin/cursos/cursos.component";
import { CursoComponent } from "./admin/cursos/curso/curso.component";
import { DiplomadosComponent } from "./admin/diplomados/diplomados.component";
import { DiplomadoComponent } from "./admin/diplomados/diplomado/diplomado.component";
import { UsuariosComponent } from "./admin/usuarios/usuarios.component";
import { UsuarioComponent } from "./admin/usuarios/usuario/usuario.component";
import { ProfesoresComponent } from "./admin/profesores/profesores.component";
import { ProfesorComponent } from "./admin/profesores/profesor/profesor.component";
import { AlumnosComponent } from "./admin/alumnos/alumnos.component";
import { RelProgrammasComponent } from "./admin/alumnos/rel-programas/rel-programas.component";
import { InscribirProgComponent } from "./admin/alumnos/rel-programas/inscribir-prog/inscribir-prog.component";
import { AlumnoComponent } from "./admin/alumnos/alumno/alumno.component";
import { ProgramasProfComponent } from "./admin/programas-prof/programas-prof.component";


//adminprofesores
import { ProgramaComponent } from "./admin_prof/programa/programa.component";
import { HomeproComponent } from './admin_prof/homepro/homepro.component';
import { ExamenesComponent } from './admin_prof/examenes/examenes.component';
import { ExamenComponent } from './admin_prof/examenes/examen/examen.component';
import { PreguntasComponent } from './admin_prof/examenes/preguntas/preguntas.component';
import { RespuestasComponent } from './admin_prof/examenes/respuestas/respuestas.component';
import { AlumRecuperacionComponent } from './admin_prof/examenes/alum-recuperacion/alum-recuperacion.component';
import { ResultadosComponent } from './admin_prof/examenes/resultados/resultados.component';
import { DetalleComponent } from './admin_prof/examenes/resultados/detalle/detalle.component';
import { TrabajosComponent } from './admin_prof/trabajos/trabajos.component';
import { VideosComponent } from './admin_prof/videos/videos.component';
import { VideoComponent } from './admin_prof/videos/video/video.component';
import { TrabajoComponent } from './admin_prof/trabajos/trabajo/trabajo.component';
import { ClasesComponent } from './admin_prof/clases/clases.component';
import { ClaseComponent } from './admin_prof/clases/clase/clase.component';

//alumnos
import { ExamenesalumComponent } from './admin_alum/examenesalum/examenesalum.component';
import { PresentarexComponent } from './admin_alum/examenesalum/presentarex/presentarex.component';
import { VideosalumComponent } from './admin_alum/videosalum/videosalum.component';
import { CargarTrabajosComponent } from './admin_alum/cargar-trabajos/cargar-trabajos.component';
import { CargadosAlumComponent } from './admin_prof/trabajos/cargados-alum/cargados-alum.component';
import { ClasesAlumnoComponent } from './admin_alum/clases-alumno/clases-alumno.component';
import { ConferenciaComponent } from './admin_alum/conferencia/conferencia.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'AllProgramas', component: AllprogramasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rest_passw/:codigo', component: RestabPaswComponent },

  //Rutas admin
  { path: 'AdminCarreras', component: CarrerasComponent , canActivate:[GuardAutGuard] },
  { path: 'AdminCarrera/:id', component: CarreraComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminCursos', component: CursosComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminCurso/:id', component: CursoComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminDiplomados', component: DiplomadosComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminDiplomado/:id', component: DiplomadoComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminUsuarios', component: UsuariosComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminUsuario/:id', component: UsuarioComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminProfesores', component: ProfesoresComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminProfesor/:id', component: ProfesorComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminAlumnos/:tipo/:profesor/:id_prog', component: AlumnosComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminAlumnos/:tipo', component: AlumnosComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminAlumno/:id', component: AlumnoComponent ,  canActivate:[GuardAutGuard] },
  { path: 'RelalumProg/:id', component: RelProgrammasComponent ,  canActivate:[GuardAutGuard] },
  { path: 'IncripAlumProg/:id', component: InscribirProgComponent ,  canActivate:[GuardAutGuard] },
  { path: 'AdminAlumno/videos/:id_video/:tipo/:profesor/:programa', component: VideoComponent ,  canActivate:[GuardAutGuard] },



  //Rutas admin profesores
  { path: 'Homerprof', component:  HomeproComponent,  canActivate:[GuardAutGuard] },
  { path: 'Programasprf/:tipo/:prof/:perfil', component:  ProgramaComponent,  canActivate:[GuardAutGuard] },
  { path: 'Examenes/:tipo/:profesor/:programa', component: ExamenesComponent ,  canActivate:[GuardAutGuard] },
  { path : 'Examen/:id_examen/:tipo/:profesor/:programa/:edit' ,component:   ExamenComponent,  canActivate:[GuardAutGuard] },
  { path : 'Preguntas/:id_examen/:tipo/:profesor/:programa' ,component:   PreguntasComponent,  canActivate:[GuardAutGuard] },
  { path : 'Respuestas/:id_examen/:tipo/:profesor/:programa' ,component:   RespuestasComponent,  canActivate:[GuardAutGuard] },
  { path : 'ResultadosExa/:id_examen/:tipo/:profesor/:programa' ,component:   ResultadosComponent,  canActivate:[GuardAutGuard] },
  { path : 'DetalleExamenes/:id_examen/:id_pres/:tipo/:profesor/:programa' ,component:   DetalleComponent,  canActivate:[GuardAutGuard] },
  { path : 'Examen/alum_recuperacion/:id_examen' ,component:   AlumRecuperacionComponent,  canActivate:[GuardAutGuard] },
  { path: 'prof_trabajos/:tipo_doc/:tipo/:profesor/:programa/:tipo_edit', component: TrabajosComponent ,  canActivate:[GuardAutGuard] },
  { path : 'Trabajo/:id_trabajo/:tipo/:profesor/:programa/:edit/:tipo_doc' ,component:   TrabajoComponent,  canActivate:[GuardAutGuard] },
  { path : 'CargadosAlumnos/:id_trabajo' ,component:   CargadosAlumComponent,  canActivate:[GuardAutGuard] },
  { path: 'Programas_prof/:programa/:tipo', component: ProgramasProfComponent ,  canActivate:[GuardAutGuard] },
  { path: 'Programas_prof/videos/:tipo/:profesor/:id_prog', component: VideosComponent ,  canActivate:[GuardAutGuard] },
  { path: 'Programas_prof/video/:id_video/:tipo/:profesor/:programa', component: VideoComponent ,  canActivate:[GuardAutGuard] },
  { path : 'Programas_prof/ClasesProf/:tipo/:profesor/:id_prog' ,component:   ClasesComponent,  canActivate:[GuardAutGuard] },
  { path : 'Programas_prof/Clase/:id_clase/:tipo/:profesor/:programa/:edit' ,component:   ClaseComponent,  canActivate:[GuardAutGuard] },

    //Rutas admin Alumnos

    { path : 'ExamenesAlum/:tipo/:profesor/:programa/:alumno' ,component: ExamenesalumComponent,  canActivate:[GuardAutGuard] },
    { path : 'presentarex/:idexamen/:tipo/:profesor/:programa/:alumno' ,component:   PresentarexComponent,  canActivate:[GuardAutGuard] },
    { path : 'VideosAlum/:tipo/:profesor/:programa' ,component:   VideosalumComponent,  canActivate:[GuardAutGuard] },
    { path : 'ClasesAlum/:tipo/:profesor/:programa' ,component:   ClasesAlumnoComponent,  canActivate:[GuardAutGuard] },
    { path : 'CargarTrabajos/:idtrabajo/:alumno' ,component:   CargarTrabajosComponent,  canActivate:[GuardAutGuard] },
    { path : 'CargarTrabajos/:idtrabajo/:alumno' ,component:   CargarTrabajosComponent,  canActivate:[GuardAutGuard] },
    { path: 'conferencia/:id', component: ConferenciaComponent ,  canActivate:[GuardAutGuard] },

  //Rutas por defecto
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
