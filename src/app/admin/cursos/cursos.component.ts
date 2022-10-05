import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Carreras, Cursos } from "../../interfaces/interfaces";
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos : Cursos[] = [];
  texto ='curso';
  pathImg = environment.pathImgs;
  id !: number;
  frmProfIns !: FormGroup;
  sucess!:boolean;
  mensaje!:string;

  constructor(private auth:AuthService,
              public router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.auth.listCursos()
    .subscribe((res:any)=>{
      this.cursos = res.data;
      this.initForm();
    });
  }

  estado(estado:number){
    if(estado == 1){
      return 'Activo';
    }else{
      return 'Inactivo';
    }

  }

  eliminarcarrera(id:number){
    this.auth.deletecurso(id)
    .subscribe((res:any)=>{
      this.cursos = res.data;
    });
  }

  initForm(){
    this.frmProfIns = this.fb.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }


  InscripcionProfesor(id_carrera:number,tipo:number){
    //tipo 1 carrera
    //inscripcion de profesor
    this.auth.InscripcionProfesor(this.frmProfIns.value,id_carrera,tipo)
    .subscribe((res:any)=>{

      Swal.fire({
        title: 'Mensaje de usuario',
        text: res.mensaje,
        background:'#8475b6',
        color:'white',
        confirmButtonColor:'#2A1043'
      })

    })


  }


}
