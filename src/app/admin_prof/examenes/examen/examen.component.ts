import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, Examen } from '../../../interfaces/interfaces';
import { ProfesoresService } from '../../../services/profesores.service';
import {AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  id_empresa !: number;
  id_examen !: number;
  frmClasCreator !: FormGroup;
  frmGuardar = new FormData();
  frmAlumCreator !: FormGroup;
  alumGuardar = new FormData();
  examen !: Examen;
  mensaje !: string;
  sucess !:boolean;
  user !: Usuario;
  estadoex !: boolean;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;
  edit !: number;

  constructor(private fb: FormBuilder,
              private apiAlid: ProfesoresService,
              private authApi:AuthService,
              private router:Router,
              private acRouter: ActivatedRoute,) { }

  ngOnInit(): void {

    this.initForm();
    this.user = this.authApi.getUser();
    this.acRouter.params.subscribe(param => {
      this.id_examen = param['id_examen'];
      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];
      this.edit = param['edit'];

      if(this.edit >0){

        this.apiAlid.ExamenId(this.id_examen,this.tipo_prog,this.programa)
        .subscribe((res:any)=>{
          this.examen = res.examen;
          this.chargeForm();

        });

      }

    });

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
      numpreg: ['', Validators.required],
      numpregaprob: ['', Validators.required],
      duracion: ['', Validators.required],
      tipo_examen: ['', Validators.required]

    });
  }

  chargeForm(){

    this.frmClasCreator.patchValue({
      nombre:this.examen.nombre,
      descrip:this.examen.descripcion,
      fechaini: this.examen.fecha_inicio,
      fechafin: this.examen.fecha_fin,
      numpreg:  this.examen.numero_preguntas,
      numpregaprob:  this.examen.num_preg_aprobar,
      duracion:  this.examen.duracion,
      tipo_examen: this.examen.tipo_examen,
    });
  }

  crearExamen(){

    const payload = {
      id_examen: this.id_examen,
      tipo: this.tipo_prog,
      profesor: this.profesor,
      programa: this.programa,
      data: this.frmClasCreator.value
    };


    if(this.edit ==0){
      this.apiAlid.crearExamen(payload)
      .subscribe((res:any)=>{
        this.mensaje = res.mensaje;
        this.sucess = true;
        Swal.fire('Examen creado exitosamente')
       this.router.navigateByUrl('/Examenes/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa);


      });
    }else{

      this.apiAlid.editarExamen(payload)
      .subscribe((res:any)=>{
        this.mensaje = res.mensaje;
        this.sucess = true;
        Swal.fire('Examen creado exitosamente')
       this.router.navigateByUrl('/Examenes/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa);

      });
    }

  }

}
