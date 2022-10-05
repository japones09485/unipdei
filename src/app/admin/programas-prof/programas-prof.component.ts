import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Program_Profesores } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-programas-prof',
  templateUrl: './programas-prof.component.html',
  styleUrls: ['./programas-prof.component.css']
})
export class ProgramasProfComponent implements OnInit {

  programa !: number;
  tipo_programa !: number;
  Profesores : Program_Profesores[] = [];
  name_program !: String;

  constructor(public auth: AuthService,
    private acRouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    this.acRouter.params.subscribe(param => {
      this.programa = param["programa"];
      this.tipo_programa = param["tipo"];
       this.auth.profesoresPrograma(this.programa,this.tipo_programa)
       .subscribe((res:any)=>{
          this.Profesores = res.profesores;
          this.name_program = res.name_program;
       })


    });

  }

  estado(estado:number){
    if(estado == 1){
      return 'Activo';
    }else{
      return 'Inactivo';
    }

  }

  deleteprofesor_program(programa:number,tipo:number,profesor:number){



    this.auth.deleteprofesor_program(programa,tipo,profesor)
    .subscribe((res:any)=>{
      this.Profesores = res.profesores;
    });
  }

}
