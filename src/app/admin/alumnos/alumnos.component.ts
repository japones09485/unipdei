import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ProfesoresService } from "../../services/profesores.service";
import { Alumnos,Paises, Usuario } from "../../interfaces/interfaces";
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  Alumnos : Alumnos[] = [];
  id !: number;
  paisesList: Paises[] = [];
  paises: Paises[] = [];
  nombrePais !: String;
  imgCountry !: String;
  banderaimg !: String;
  namearchivo !: String;
  mostrarMsj !: boolean;
  pathImg = environment.pathImgs;
  frmCr !: FormGroup;
  frmGuardar = new FormData();
  usuario !: Usuario;
  mensaje_masivo !: String;
  tipo !: number;
  profesor !: number;
  programa !: number;
  frmAlumCreator !: FormGroup;
  msjresp !: string;
  mostrarmsjresp = false;
  seleccionado !: string;


  constructor(private auth:AuthService,
              private profs:ProfesoresService,
              private fb: FormBuilder,
              private acRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.usuario = this.auth.getUser();
    this.inicializarFormulario();
    this.initForm();
    this.acRouter.params.subscribe(param => {
        this.tipo = param['tipo'];
        if(this.tipo== 0){
          this.auth.listAlumnos()
          .subscribe((res:any)=>{
            this.Alumnos = res.data;
          });
        }else{
          this.profesor = param['profesor'];
          this.programa = param['id_prog'];
          this.profs.getAlum_carrera(this.tipo,this.profesor,this.programa)
          .subscribe((res:any)=>{
            this.Alumnos = res.alumnos;

          })
        }

    });

    this.auth.getPaisesList()
    .subscribe((res:any)=>{
      this.paisesList = res.data
    });

    this.auth.getPaises()
    .subscribe((res:any)=>{
      this.paises = res.data

    });

  }

  estado(estado:number){
    if(estado == 1){
      return 'Activo';
    }else{
      return 'Inactivo';
    }

  }

  eliminaralumno(id:number){
    this.auth.deletealumnos(id)
    .subscribe((res:any)=>{
      this.Alumnos = res.data;
    });
  }

  agregarArchivo(event: any, numImg: number) {
    const imgs: any = event.target;

    if (imgs.files.length > 0) {
      this.frmGuardar.append(`${numImg}`, imgs.files[0]);
    }

  }

  initForm(){
    this.frmAlumCreator = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }


  inicializarFormulario() {
    this.frmCr = this.fb.group({});
  }

  cargarAlumnos(user:number){
    const payload = {
      data: this.frmCr.value
    };

    this.frmGuardar.append('data', JSON.stringify(payload));
    this.frmGuardar.append('usuario', JSON.stringify(this.usuario.usu_id));

    this.auth.cargarAlumnos(this.frmGuardar)
    .subscribe((res:any)=>{
      this.mostrarMsj = true;
      this.mensaje_masivo = res.mensaje;
      const jsonString = JSON.stringify(Object.assign({}, res.error))


      if(res.sucess == false){

        Swal.fire({
          title: 'Mensaje de usuario',
          text: res.mensaje,
          icon: 'warning',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ver mensajes de error!'
        }).then((result) => {

          if (result.isConfirmed) {
            Swal.fire(
              'Log errores',
              res.error,
              'question'
            )

          }
        })

      }else{

        this.Alumnos = res.alumnos;
        Swal.fire({
          title: res.mensaje,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }



    });
  }

  Inscripcion(alumno:number){

    const payload = {
      tipo: this.tipo,
      alumno: this.frmAlumCreator.value,
      profesor : this.profesor,
      programa : this.programa
    };


    this.profs.Inscri_Alumno_prog(payload)
    .subscribe((res:any)=>{
      if(res.sucess = true){
        this.mostrarmsjresp = true;
        this.msjresp = res.mensaje;
      }
      this.Alumnos = res.alumnos;

    })



}

listarprogramas(tipoProg:string){
 alert(tipoProg);
}

}
