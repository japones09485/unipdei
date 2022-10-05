import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, Examen,Pregunta,Respuesta} from '../../../interfaces/interfaces';
import { ProfesoresService } from '../../../services/profesores.service';
import {AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {
  id_empresa !: number;
  id_examen !: number;
  numpreg !: number;
  frmClasCreator !: FormGroup;
  frmGuardar = new FormData();
  examen !: Examen;
  mensaje !: string;
  sucess !:boolean;
  user !: Usuario;
  idExamen !: number;
  arrnumpreg=[];
  preguntas: Pregunta[] = [];
  respuestas: any;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;

  constructor(private fb: FormBuilder,
    private apiAlid : ProfesoresService,
    private authApi:AuthService,
    private router:Router,
    private acRouter: ActivatedRoute) { }

    ngOnInit(): void {

      this.user = this.authApi.getUser();


      this.acRouter.params.subscribe(param => {

        this.id_examen = param['id_examen'];
        this.profesor = param['profesor'];
        this.tipo_prog = param['tipo'];
        this.programa = param['programa'];

        this.apiAlid.ExamenId(this.id_examen,this.tipo_prog,this.programa)
        .subscribe((res:any)=>{
          this.examen = res.examen;
          this.idExamen = this.examen.id_examen;
          this.numpreg = this.examen.numero_preguntas;

        this.apiAlid.list_preguntas(this.id_examen)
        .subscribe((res:any)=>{
          this.preguntas = res.preguntas;


        });

        this.apiAlid.list_respuestas(this.id_examen)
        .subscribe((res:any)=>{
          this.respuestas = res.respuestas;

        });

        });
      });

     }



     guardarResp(r:any){

      const payload = {
        user: this.id_empresa,
        data: r.value,
        idexamen:this.idExamen
      };
      console.log(payload);

      this.apiAlid.guardarRespuestas(payload)
      .subscribe((res:any)=>{

       this.sucess = true;
       this.mensaje = res.mensaje;

       Swal.fire({
        title: 'Respuestas configuradas exitosamente',
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
}
