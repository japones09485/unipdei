import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";
import { ProfesoresService } from "../../../../services/profesores.service";
import { Alumnos,Carreras,Cursos,Diplomados,Paises, Profesores, Program_Profesores, Usuario } from "../../../../interfaces/interfaces";
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscribir-prog',
  templateUrl: './inscribir-prog.component.html',
  styleUrls: ['./inscribir-prog.component.css']
})
export class InscribirProgComponent implements OnInit {

  frmCr!: FormGroup;
  frmGuardar = new FormData();
  id !: number;
  usuario !: number;
  user !: Usuario;
  opcionSeleccionado !: number;
  ProgSeleccionado !: number;
  programaf : Carreras[] = [];
  profesores : Program_Profesores[] = [];



  constructor(public auth: AuthService,
    public authpro: ProfesoresService,
    private acRouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();

    this.inicializarFormulario();
    this.acRouter.params.subscribe(param => {
      this.id = param["id"];

    });

  }



  inicializarFormulario() {
    this.frmCr = this.fb.group({

      tipo_programa: ['', Validators.required],
      programa: ['', Validators.required],
      profesor: ['', Validators.required],
    });
  }

  listar_programas(tipo_prog:number){
    if(tipo_prog == 1){

      this.auth.listCarreras()
     .subscribe((res:any)=>{
      this.programaf = res.data;


     });

    }else if(tipo_prog == 2){

      this.auth.listCursos()
     .subscribe((res:any)=>{
      this.programaf = res.data;

     });

    }else if(tipo_prog == 3){

      this.auth.listDiplomados()
     .subscribe((res:any)=>{
      this.programaf = res.data;

     });

    }

  }

  listar_profesores(tipo:number,programa:number){
    this.auth.profesoresPrograma(programa,tipo)
       .subscribe((res:any)=>{
         this.profesores = res.profesores;

       });

  }

  inscribir_alum(id_alum:number) {
    const payload = {
      data: this.frmCr.value
    };

    this.frmGuardar.append('data', JSON.stringify(payload));
    this.frmGuardar.append('id_alumno', JSON.stringify(id_alum));


      this.authpro.Inscri_Alumno_prog(this.frmGuardar)
      .subscribe((res: any) => {

        Swal.fire(res.mensaje)

      });

  }

}
