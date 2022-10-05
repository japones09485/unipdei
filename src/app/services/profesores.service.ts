import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  private urlAPI = environment.apiURL;

  constructor(private http: HttpClient) { }



  getCarreras(tipo:number,profesor:number){
    return this.http.post(this.urlAPI + `profesores/carrerasProf`, {tipo,profesor});
  }

  getCarrerasAlum(tipo:number,alumno:number){

    return this.http.post(this.urlAPI + `alumnos/getCarrerasAlum`, {tipo,alumno});
  }

  getAlum_carrera(tipo:number,profesor:number,id_prog:number){
    return this.http.post(this.urlAPI + `Alumnos/Alum_carrera`, {tipo,profesor,id_prog});
  }

  Inscri_Alumno_prog(payload:any){
    return this.http.post(this.urlAPI + `Alumnos/Inscri_Alumno_prog`, payload);
  }

  listarExamenes(tipo:number , profesor: number, programa:number){

    return this.http.post(this.urlAPI + `Rest_examenes/listarAll`, { tipo,profesor,programa });
  }

  listarExamenesAlum(tipo:number , profesor: number, programa:number, alumno:number){

    return this.http.post(this.urlAPI + `Rest_examenes/listarExamenesAlum`, { tipo,profesor,programa,alumno });
  }
  estadoExamen(id_examen:number,estado:number,tipo:number,programa:number,profesor:number){
    return this.http.post(this.urlAPI + `Rest_examenes/estadoExamen`, { id_examen,estado,tipo,programa,profesor });
  }

  eliminarExamen(id_examen:number,tipo:number , programa: number, profesor:number){
    return this.http.post(this.urlAPI + `Rest_examenes/eliminarExamen`, { id_examen,tipo,profesor,programa});

  }

  crearExamen(payload: any){
    return this.http.post(this.urlAPI + `Rest_examenes/crearExamen`, payload);
  }

  editarExamen(payload: any){
    return this.http.post(this.urlAPI + `Rest_examenes/editarExamen`, payload);
  }

  ExamenId(id:number,tipo:number, programa:number){
    return this.http.post(this.urlAPI + `Rest_examenes/traerId`, { id,tipo,programa});
  }

  list_preguntas(id:number){
    return this.http.post(this.urlAPI + `Rest_preguntas/list_preguntas`, { id });
  }

  guardarPreguntas(payload: any){
    return this.http.post(this.urlAPI + `Rest_preguntas/guardarPreguntas`, payload);
  }

  eliminar_preg(id_pres:number,id_exa:number){
    return this.http.post(this.urlAPI + `Rest_preguntas/eliminar_preg`, { id_pres,id_exa });
  }

  add_preg(payload: any){
    return this.http.post(this.urlAPI + `Rest_preguntas/add_preg`, payload);
  }

  list_respuestas(id:number){
    return this.http.post(this.urlAPI + `Rest_respuestas/list_respuestas`, { id });
  }

  list_respuestas_prese(id:number){
    return this.http.post(this.urlAPI + `Rest_respuestas/list_respuestas_prese`, { id });
  }

  validar_prese(payload: any){
    return this.http.post(this.urlAPI + `Rest_examenes/validar_prese`, payload);
  }

  guardarRespuestasAlum(payload: any){
    return this.http.post(this.urlAPI + `Rest_respuestas_alum/guardarRespuestas`, payload);
  }

  iniciarExamen(payload: any){
    return this.http.post(this.urlAPI + `Rest_examenes/iniciarExamen`, payload);
  }

  guardarRespuestas(payload: any){
    return this.http.post(this.urlAPI + `Rest_respuestas/guardarRespuestas`, payload);
  }

  List_alum_examen(id_examen:number){
    return this.http.post(this.urlAPI + `Rest_examenes/List_alum_examen`, {id_examen});
  }

  Inscri_alum_examen(payload: any){
    return this.http.post(this.urlAPI + `Rest_examenes/Inscri_alum_examen`, payload);
  }

  eliminar_alum_examen(id_rec:number,id_examen:number){
    return this.http.post(this.urlAPI + `Rest_examenes/eliminar_alum_examen`, {id_rec,id_examen});
  }

  listarTrabajos(tipo:number , profesor: number, programa:number,tipo_doc:number){
    return this.http.post(this.urlAPI + `profesores/listarTrabajos`, {tipo,profesor,programa,tipo_doc});
  }

  listarTrabajosAlum(tipo:number , profesor: number, programa:number,tipo_doc:number,alumno:number){
    return this.http.post(this.urlAPI + `alumnos/listarTrabajosAlum`, {tipo,profesor,programa,tipo_doc,alumno});
  }

  TrabajoId(id:number,tipo:number, programa:number , profesor:number){
    return this.http.post(this.urlAPI + `profesores/TrabajoId`, { id,tipo,programa,profesor});
  }

  crearTrabajo(payload: any){
    return this.http.post(this.urlAPI + `profesores/crearTrabajo`, payload);
  }

  cargarTrabajoAlum(payload: any){
    return this.http.post(this.urlAPI + `alumnos/cargarTrabajoAlum`, payload);
  }

  editarTrabajo(payload: any){
    return this.http.post(this.urlAPI + `profesores/editarTrabajo`, payload);
  }

  eliminarTrabajo(id:number,tipo:number, programa:number , profesor:number,tipo_doc:number){
    return this.http.post(this.urlAPI + `profesores/eliminarTrabajo`, {id,tipo,programa,profesor,tipo_doc});
  }

  resultadosExamen(id_examen:number){
    return this.http.post(this.urlAPI + `profesores/resultadosExamen`, { id_examen});
  }

  verResultado(id_pres:number){

    return this.http.post(this.urlAPI + `profesores/verResultado`, {id_pres});
  }

  listarVideos(tipo:number , profesor: number, programa:number){
    return this.http.post(this.urlAPI + `profesores/listarVideos`, {tipo,profesor,programa});
  }

  VideoId(id:number,tipo:number, programa:number , profesor:number){
    return this.http.post(this.urlAPI + `profesores/VideoId`, { id,tipo,programa,profesor});
  }

  crearVideo(payload: any){
    return this.http.post(this.urlAPI + `profesores/crearVideo`, payload);
  }


  eliminarVideo(id_video:number,tipo:number , programa: number, profesor:number){
    return this.http.post(this.urlAPI + `profesores/eliminarVideo`, { id_video,tipo,profesor,programa});

  }


  cambiarestadoVideo(id_video:number,estado:number,tipo:number,profesor:number,programa:number){
    return this.http.post(this.urlAPI + `profesores/cambiarestadoVideo`, { id_video,estado,tipo,profesor,programa});
  }

  listarVideosAlum(tipo:number , programa: number,profesor:number){
    return this.http.post(this.urlAPI + `Alumnos/listarVideos`, { tipo,profesor,programa});
  }


  listarClasesAlum(tipo:number , programa: number,profesor:number){
    let tipoalum = 1;
    return this.http.post(this.urlAPI + `Alumnos/listarClases`, { tipo,profesor,programa,tipoalum});
  }

  cargarTrabajo(payload:any){
    return this.http.post(this.urlAPI + `alumnos/cargarTrabajo`, payload);
  }

  ValidarcargueTrabajo(idtrabajo:number,alumno:number){
    return this.http.post(this.urlAPI + `Alumnos/ValidarcargueTrabajo`, { idtrabajo,alumno});
  }

  cargadosTrabajo(idtrabajo:number){
    return this.http.post(this.urlAPI + `profesores/cargadosTrabajo`, { idtrabajo});
  }

  listarclases(tipo:number , profesor: number, programa:number){
    return this.http.post(this.urlAPI + `profesores/listarclases`, {tipo,profesor,programa});
  }

  crearClase(payload:any){
    return this.http.post(this.urlAPI + `profesores/crearClase`, payload);
  }

  ClaseId(id:number,tipo?:number, programa?:number , profesor?:number){
    return this.http.post(this.urlAPI + `profesores/ClaseId`, { id,tipo,programa,profesor});
  }


  eliminarClase(id:number,tipo:number, programa:number , profesor:number){
    return this.http.post(this.urlAPI + `profesores/eliminarClase`, {id,tipo,programa,profesor});
  }

  estadoClases(id_clase:number ,estado: number,tipo:number,programa:number,profesor:number){
    return this.http.post(this.urlAPI + `profesores/estadoClases`, {id_clase,estado,tipo,programa,profesor});
  }


}
