import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, Examen,Pregunta} from '../../../interfaces/interfaces';
import { ProfesoresService } from '../../../services/profesores.service';
import {AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  id_empresa !: number;
  id_examen !: number;
  numpreg !: number;
  frmClasCreator !: FormGroup;
  frmGuardar = new FormData();
  examen !: Examen;
  mensaje !: string;
  sucess !: boolean;
  user !: Usuario;
  idExamen !:number;
  preguntas: Pregunta[] = [];
  validul !: boolean;
  crrmd !: boolean;
  validalm = true;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;
  arrnumpreg=[] as any;

  constructor(private fb: FormBuilder,
              private apiAlid: ProfesoresService,
              private authApi:AuthService,
              private router:Router,
              private acRouter: ActivatedRoute,) { }

  ngOnInit(): void {

    this.user = this.authApi.getUser();
    this.acRouter.params.subscribe(param => {
      console.log(param);


      this.id_examen = param['id_examen'];
      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];

      this.apiAlid.ExamenId(this.id_examen,this.tipo_prog,this.programa)
      .subscribe((res:any)=>{
        this.examen = res.examen;
        this.numpreg = this.examen.numero_preguntas;

        this.apiAlid.list_preguntas(this.id_examen)
      .subscribe((res:any)=>{

        this.preguntas = res.preguntas;

        if(res.sucess == false){


          for (var i=1; i<=this.numpreg; i++){

            this.arrnumpreg.push(i);
          }

        }

      });

      });

    });

   }

  GuardarPreguntas(f:any){
    const payload = {
      data: f.value,
      idexamen:this.id_examen,
      tipo:this.tipo_prog,
      programa:this.programa,
      profesor:this.profesor
    };



    this.apiAlid.guardarPreguntas(payload)
    .subscribe((res:any)=>{

     this.sucess = true;
     this.mensaje = res.mensaje;


     Swal.fire({
      title: 'Preguntas configuradas exitosamente',
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.router.navigateByUrl('/Examenes/'+this.tipo_prog+'/'+this.programa+'/'+this.profesor);
      }
    })

    });
  }

  eliminar_preg(id_preg:number,id_exa:number){

    this.apiAlid.eliminar_preg(id_preg,id_exa)
    .subscribe((res:any)=>{
      this.preguntas = res.preguntas;
      this.mensaje = res.mensaje;
      if(res.sucess == true){
        this.validul = true;
        setTimeout(() => {
          this.validul = false;
        }, 5000);
      }
     });
  }

  addPregunta(f :any){
    const payload = {
      data: f.value,
      idexamen:this.id_examen,
    };


    this.apiAlid.add_preg(payload)
    .subscribe((res:any)=>{
   if(res.sucess == true){
    this.crrmd = true;
    this.preguntas = res.preguntas;
   }else{
    this.mensaje = res.mensaje
    this.validalm = false;
    setTimeout(() => {

      this.validalm = true;
    }, 2500);

   }

  });

  }

  crrmod(){
    this.router.navigateByUrl('/Examenes/'+this.tipo_prog+'/'+this.programa+'/'+this.profesor);
  }
}
