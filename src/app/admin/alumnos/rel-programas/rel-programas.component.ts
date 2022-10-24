import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { ProfesoresService } from "../../../services/profesores.service";
import { Alumnos,Paises, Usuario,Carreras, Cursos, Diplomados } from "../../../interfaces/interfaces";
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { DiplomadosComponent } from '../../diplomados/diplomados.component';

@Component({
  selector: 'app-rel-programas',
  templateUrl: './rel-programas.component.html',
  styleUrls: ['./rel-programas.component.css']
})
export class RelProgrammasComponent implements OnInit {
  id_alum !: number;
  carreras : any[] = [];
  cursos : any[] = [];
  diplomados : any[] = [];

  constructor(private auth:AuthService,
    private profs:ProfesoresService,
    private fb: FormBuilder,
    private acRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.acRouter.params.subscribe(param => {
      this.id_alum = param["id"];
      this.profs.getprogramasAlumnos(this.id_alum)
      .subscribe((res:any)=>{
        if(res.success == false){
          Swal.fire('No hay registros disponibles');

        }
        console.log(res);

        this.carreras = res.carreras;
        this.cursos = res.cursos;
        this.diplomados = res.diplomados;
      });
    });
  }

  cambiarestado(id_rel:number,estado:number){
    this.profs.cambiarestado_rel(id_rel,estado,this.id_alum)
    .subscribe((res:any)=>{
      if(res.success==true){
        this.carreras = res.carreras;
        this.cursos = res.cursos;
        this.diplomados = res.diplomados;
      }
    });

  }

}
