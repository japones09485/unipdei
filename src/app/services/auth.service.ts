import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAPI = environment.apiURL;
  public user !: Usuario ;
  mensajeUser = ''; // Mensaje para confirmacion de accion
  mostrarMsj = false;

  constructor(private http: HttpClient) { }



  getPerfiles(){
    return this.http.get(this.urlAPI + `Auth/getperfiles`);
  }


  isLogged() {
    return new Promise(resolve => {
      this.isAuthenticated()
        .subscribe((res: any) => {
          if (res.status === true) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  }


  isAuthenticated() {
    const token = sessionStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    };
    return this.http.get(`${this.urlAPI}auth/verifyToken`, httpOptions);
  }

  setUser(user: Usuario) {
    this.user = user;
  }

  getUser(): Usuario {

    if (!this.user) {
      this.user = JSON.parse(sessionStorage.getItem('user')!);
    }
    return this.user;
  }

  getPaisesList(){
    return this.http.get(this.urlAPI + `Paises/getPaisesList`);
  }

  getPaises(){
    return this.http.get(this.urlAPI + `Paises/getPaises`);
  }



  logIn(payload:any){
    return this.http.post(`${this.urlAPI}auth/login`, payload);
  }

  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }

  listCarreras(){
    return this.http.get(this.urlAPI + `Carreras/getall`);
  }

  get_carrera(id:number){
    return this.http.post(this.urlAPI + `Carreras/getcarrera`, { id });
  }

  guardarCarrera(payload:any){
    return this.http.post(this.urlAPI + `Carreras/guardar`, payload);
  }

  deletecarrera(id:number){
    return this.http.post(this.urlAPI + `Carreras/deletecarrera`, { id });
  }


  listCursos(){
    return this.http.get(this.urlAPI + `Cursos/getall`);
  }

  get_curso(id:number){
    return this.http.post(this.urlAPI + `Cursos/getcurso`, { id });
  }

  guardarCurso(payload:any){
    return this.http.post(this.urlAPI + `Cursos/guardar`, payload);
  }


  deletecurso(id:number){
    return this.http.post(this.urlAPI + `Cursos/deletecurso`, { id });
  }

  get_diplomado(id:number){
    return this.http.post(this.urlAPI + `Diplomados/getdiplomado`, { id });
  }


  listDiplomados(){
    return this.http.get(this.urlAPI + `Diplomados/getall`);
  }

  guardarDiplomado(payload:any){
    return this.http.post(this.urlAPI + `Diplomados/guardar`, payload);
  }


  deletediplomado(id:number){
    return this.http.post(this.urlAPI + `Diplomados/deletediplomado`, { id });
  }


  listUsuarios(){
    return this.http.get(this.urlAPI + `Usuarios/getall`);
  }

  guardarUsuario(payload:any){
    return this.http.post(this.urlAPI + `Usuarios/guardar`, payload);
  }

  get_usuario(id:number){
    return this.http.post(this.urlAPI + `Usuarios/getusuario`, { id });
  }

  deleteusuario(id:number){
    return this.http.post(this.urlAPI + `Usuarios/deleteusuario`, { id });
  }

  listProfesores(){
    return this.http.get(this.urlAPI + `profesores/getall`);
  }

  guardarProfesor(payload:any){
    return this.http.post(this.urlAPI + `profesores/guardar`, payload);
  }

  get_profesor(id:number){
    return this.http.post(this.urlAPI + `profesores/getProfesor`, { id });
  }

  deleteprofesor(id:number){
    return this.http.post(this.urlAPI + `profesores/deleteProfesor`, { id });
  }

  cant_programas(profesor:number){
    return this.http.post(this.urlAPI + `profesores/cant_programas`, { profesor });
  }

  cant_programasalum(alumno:number){
    return this.http.post(this.urlAPI + `alumnos/cant_programasalum`, { alumno });
  }

  listAlumnos(){
    return this.http.get(this.urlAPI + `alumnos/getall`);
  }

  guardarAlumnos(payload:any){
    return this.http.post(this.urlAPI + `alumnos/guardar`, payload);
  }

  get_alumno(id:number){
    return this.http.post(this.urlAPI + `alumnos/getAlumno`, { id });
  }

  deletealumnos(id:number){
    return this.http.post(this.urlAPI + `alumnos/deleteAlumno`, { id });
  }

  InscripcionProfesor(data: any,id:number,tipo:number){
    return this.http.post(this.urlAPI + `profesores/InscripcionProfesor`, { data,id,tipo });
  }

  cargarAlumnos(payload:any){
    return this.http.post(this.urlAPI + `alumnos/cargarAlumnos`, payload);
  }

  profesoresPrograma(programa:number, tipo:number){
    return this.http.post(this.urlAPI + `profesores/profesoresPrograma`, { programa,tipo });
  }

  deleteprofesor_program(programa:number, tipo:number,profesor:number){
    return this.http.post(this.urlAPI + `profesores/deleteprofesor_program`, { programa,tipo,profesor });
  }
}
