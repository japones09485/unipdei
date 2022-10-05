import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, trabajos_alumnos} from '../../../interfaces/interfaces';
import { ProfesoresService } from '../../../services/profesores.service';
import {AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cargados-alum',
  templateUrl: './cargados-alum.component.html',
  styleUrls: ['./cargados-alum.component.css']
})
export class CargadosAlumComponent implements OnInit {

  id_trabajo !: number;
  cargados !: any;
  pathImg = environment.pathImgs;

  constructor(private fb: FormBuilder,
    private apiAlid: ProfesoresService,
    private authApi:AuthService,
    private router:Router,
    private acRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.acRouter.params.subscribe(param => {
      this.id_trabajo = param['id_trabajo'];
      this.apiAlid.cargadosTrabajo(this.id_trabajo)
      .subscribe((res:any)=>{
        console.log(res);

        if(res.success == true){
          this.cargados = res.cargados;
        }else{
          Swal.fire('No hay registros disponibles');
        }
      });

      });
  }

}
