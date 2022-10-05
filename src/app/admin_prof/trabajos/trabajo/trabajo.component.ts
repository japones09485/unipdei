import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, trabajos} from '../../../interfaces/interfaces';
import { ProfesoresService } from '../../../services/profesores.service';
import {AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent implements OnInit {

  id_empresa !: number;
  id_trabajo !: number;
  frmClasCreator !: FormGroup;
  frmGuardar = new FormData();
  frmAlumCreator !: FormGroup;
  alumGuardar = new FormData();
  trabajo !: trabajos;
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
      this.id_trabajo = param['id_trabajo'];
      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];
      this.edit = param['edit'];
      this.tipo_doc = param['tipo_doc'];

      if(this.edit >0){

        this.apiAlid.TrabajoId(this.id_trabajo,this.tipo_prog,this.programa,this.profesor)
        .subscribe((res:any)=>{
          this.trabajo = res.trabajo;
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
      fechafin: ['', Validators.required],
    });
  }

  chargeForm(){

    this.frmClasCreator.patchValue({
      nombre:this.trabajo.nombre,
      descrip:this.trabajo.descripcion,
      fechaini: this.trabajo.fecha_inicio,
      fechafin: this.trabajo.fecha_fin,
    });
  }

  crearTrabajo(){


    const payload = {
      id_trabajo: this.id_trabajo,
      tipo: this.tipo_prog,
      profesor: this.profesor,
      programa: this.programa,
      data: this.frmClasCreator.value
    };



    this.frmGuardar.append('data', JSON.stringify(payload));
    this.frmGuardar.append('id_trabajo', JSON.stringify(this.id_trabajo));
    this.frmGuardar.append('tipo', JSON.stringify(this.tipo_prog));
    this.frmGuardar.append('profesor', JSON.stringify(this.profesor));
    this.frmGuardar.append('programa', JSON.stringify(this.programa));
    this.frmGuardar.append('tipo_doc', JSON.stringify(this.tipo_doc));

    if(this.edit ==0){
      this.apiAlid.crearTrabajo(this.frmGuardar)
      .subscribe((res:any)=>{
        this.mensaje = res.mensaje;
        this.sucess = true;
        Swal.fire('Trabajo creado exitosamente')
        this.router.navigateByUrl('/prof_trabajos/'+this.tipo_doc+'/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa+'/'+this.edit);

      });
    }else{

      this.apiAlid.editarTrabajo(this.frmGuardar)
      .subscribe((res:any)=>{
        this.mensaje = res.mensaje;
        this.sucess = true;
        Swal.fire('Trabajo creado exitosamente')
        this.router.navigateByUrl('/prof_trabajos/'+this.tipo_doc+'/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa+'/'+this.edit);

      });
    }

  }

}
