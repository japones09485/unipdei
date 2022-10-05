import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, clases} from '../../../interfaces/interfaces';
import { ProfesoresService } from '../../../services/profesores.service';
import {AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent implements OnInit {



  id_empresa !: number;
  id_clase !: number;
  frmClasCreator !: FormGroup;
  frmGuardar = new FormData();
  frmAlumCreator !: FormGroup;
  alumGuardar = new FormData();
  clase !: clases;
  mensaje !: string;
  sucess !:boolean;
  user !: Usuario;
  estadoex !: boolean;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;
  edit !: number;
  tipo_doc !: number;

  constructor(private fb: FormBuilder,
              private apiAlid: ProfesoresService,
              private authApi:AuthService,
              private router:Router,
              private acRouter: ActivatedRoute,) { }

  ngOnInit(): void {

    this.initForm();
    this.user = this.authApi.getUser();
    this.acRouter.params.subscribe(param => {

      this.id_clase = param['id_clase'];
      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];
      this.edit = param['edit'];
      this.tipo_doc = param['tipo_doc'];

      if(this.edit >0){

        this.apiAlid.ClaseId(this.id_clase,this.tipo_prog,this.programa,this.profesor)
        .subscribe((res:any)=>{
          this.clase = res.clase;
          this.chargeForm();

        });

      }

    });

   }

   agregarArchivo(event: any, numImg: number) {
    const imgs: any = event.target;

    if (imgs.files.length > 0) {
      this.frmGuardar.append(`${numImg}`, imgs.files[0]);
    }


  }

   fechaini(event: any){
    this.frmClasCreator.patchValue({
      fechaini: event.target.value
    });

  }

  fechafin(event: any){
    this.frmClasCreator.patchValue({
      fechafin: event.target.value
    });
  }

  initForm(){
    this.frmClasCreator = this.fb.group({
      nombre: ['', Validators.required],
      descrip: ['', Validators.required],
      fechaini: ['', Validators.required],
      hora: ['', Validators.required],
    });
  }

  chargeForm(){

    this.frmClasCreator.patchValue({
      nombre:this.clase.clas_nombre,
      descrip:this.clase.clas_descripcion,
      fechaini: this.clase.clas_fecha_inicio,
      hora: this.clase.clas_hora,

    });
  }

  crearClase(){


    const payload = {
      id_clase: this.id_clase,
      tipo: this.tipo_prog,
      profesor: this.profesor,
      programa: this.programa,
      data: this.frmClasCreator.value
    };




      this.apiAlid.crearClase(payload)
      .subscribe((res:any)=>{
        this.mensaje = res.mensaje;
        this.sucess = true;
        Swal.fire('Clase creada exitosamente')
        this.router.navigateByUrl('/Programas_prof/ClasesProf/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa);

      });


  }

}
