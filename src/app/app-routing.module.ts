import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
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
  { path: 'login', component: LoginComponent },
  { path: 'rest_passw/:codigo', component: RestabPaswComponent },

  //Rutas admin
  { path: 'AdminCarreras', component: CarrerasComponent },
  { path: 'AdminCarrera/:id', component: CarreraComponent },
  { path: 'AdminCursos', component: CursosComponent },
  { path: 'AdminCurso/:id', component: CursoComponent },
  { path: 'AdminDiplomados', component: DiplomadosComponent },
  { path: 'AdminDiplomado/:id', component: DiplomadoComponent },
  { path: 'AdminUsuarios', component: UsuariosComponent },
  { path: 'AdminUsuario/:id', component: UsuarioComponent },
  { path: 'AdminProfesores', component: ProfesoresComponent },
  { path: 'AdminProfesor/:id', component: ProfesorComponent },
  { path: 'AdminAlumnos/:tipo/:profesor/:id_prog', component: AlumnosComponent },
  { path: 'AdminAlumnos/:tipo', component: AlumnosComponent },
  { path: 'AdminAlumno/:id', component: AlumnoComponent },
  { path: 'AdminAlumno/videos/:id_video/:tipo/:profesor/:programa', component: VideoComponent },



  //Rutas admin profesores
  { path: 'Homerprof', component:  HomeproComponent},
  { path: 'Programasprf/:tipo/:prof/:perfil', component:  ProgramaComponent},
  { path: 'Examenes/:tipo/:profesor/:programa', component: ExamenesComponent },
  { path : 'Examen/:id_examen/:tipo/:profesor/:programa/:edit' ,component:   ExamenComponent},
  { path : 'Preguntas/:id_examen/:tipo/:profesor/:programa' ,component:   PreguntasComponent},
  { path : 'Respuestas/:id_examen/:tipo/:profesor/:programa' ,component:   RespuestasComponent},
  { path : 'ResultadosExa/:id_examen/:tipo/:profesor/:programa' ,component:   ResultadosComponent},
  { path : 'DetalleExamenes/:id_examen/:id_pres/:tipo/:profesor/:programa' ,component:   DetalleComponent},
  { path : 'Examen/alum_recuperacion/:id_examen' ,component:   AlumRecuperacionComponent},
  { path: 'prof_trabajos/:tipo_doc/:tipo/:profesor/:programa/:tipo_edit', component: TrabajosComponent },
  { path : 'Trabajo/:id_trabajo/:tipo/:profesor/:programa/:edit/:tipo_doc' ,component:   TrabajoComponent},
  { path : 'CargadosAlumnos/:id_trabajo' ,component:   CargadosAlumComponent},
  { path: 'Programas_prof/:programa/:tipo', component: ProgramasProfComponent },
  { path: 'Programas_prof/videos/:tipo/:profesor/:id_prog', component: VideosComponent },
  { path: 'Programas_prof/video/:id_video/:tipo/:profesor/:programa', component: VideoComponent },
  { path : 'Programas_prof/ClasesProf/:tipo/:profesor/:id_prog' ,component:   ClasesComponent},
  { path : 'Programas_prof/Clase/:id_clase/:tipo/:profesor/:programa/:edit' ,component:   ClaseComponent},

    //Rutas admin Alumnos

    { path : 'ExamenesAlum/:tipo/:profesor/:programa/:alumno' ,component: ExamenesalumComponent},
    { path : 'presentarex/:idexamen/:tipo/:profesor/:programa/:alumno' ,component:   PresentarexComponent},
    { path : 'VideosAlum/:tipo/:profesor/:programa' ,component:   VideosalumComponent},
    { path : 'ClasesAlum/:tipo/:profesor/:programa' ,component:   ClasesAlumnoComponent},
    { path : 'CargarTrabajos/:idtrabajo/:alumno' ,component:   CargarTrabajosComponent},
    { path : 'CargarTrabajos/:idtrabajo/:alumno' ,component:   CargarTrabajosComponent},
    { path: 'conferencia/:id', component: ConferenciaComponent },




  //Rutas por defecto
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
