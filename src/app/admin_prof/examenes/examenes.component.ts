import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Examen, Usuario } from 'src/app/interfaces/interfaces';
import { ProfesoresService } from '../../services/profesores.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NumberSymbol } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.css']
})
export class ExamenesComponent implements OnInit {
  examenes: Examen[] = [];
  user !: any;
  mensaje = 'Desea eliminar este examen?';
  sucessvideo !: boolean;
  flagSave = false;
  eliminado = true;
  id_empresa !: number;
  valid !: boolean;
  alertv !: string;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;

  constructor(private router: Router,
    private apiAlid: ProfesoresService,
    private authservice: AuthService,
    private _sanitizer: DomSanitizer,
    private acRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sucessvideo = false;
    this.user = this.authservice.getUser();
    this.valid = true;

    this.acRouter.params.subscribe(param => {
      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];
      this.apiAlid.listarExamenes(this.tipo_prog,this.profesor,this.programa)
        .subscribe((res: any) => {
          if (res.sucess == true) {
            this.examenes = res.data;
            console.log(res);

          }
        });

    });

  }



  nuevoExamen(id_examen:number,tipo:number,profesor:number,programa:number,edit:number) {
    this.router.navigate(['Examen/'+id_examen+'/'+tipo+'/'+profesor+'/'+programa+'/'+edit]);
  }

  PreguntasExamen(id_examen:number,tipo:number,programa:number,profesor:number){
    this.router.navigate(['Preguntas/'+id_examen+'/'+tipo+'/'+programa+'/'+profesor]);
  }

  RespuestasExamen(id_examen:number,tipo:number,programa:number,profesor:number){
    this.router.navigate(['Respuestas/'+id_examen+'/'+tipo+'/'+programa+'/'+profesor]);
  }

  estadoExamen(id_examen:number,estado:number,tipo:number,programa:number,profesor:number){
    this.apiAlid.estadoExamen(id_examen,estado,tipo,programa,profesor)
      .subscribe((res: any) => {
        this.examenes = res.examenes;
        this.alertv='Para activar el examen debe configurar todas las preguntas y respuestas.';
        if(res.sucess == false){
          this.valid = false;
          setTimeout(() => {

            this.valid = true;
          }, 2500);
        }


      });
  }




eliminarExamen(id_examen: number) {

  Swal.fire({
    title: 'Desea eliminar este examen?',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.apiAlid.eliminarExamen(id_examen,this.tipo_prog,this.programa,this.profesor)
      .subscribe((res: any) => {
          this.alertv = res.mensaje;
          this.examenes = res.examenes;
          this.valid = false;

      });
      Swal.fire('Examen eliminado exitosamente!', '', 'success')
    }


  })



  }

ResultadosExamen(id_examen: number){

  this.router.navigate(['ResultadosExa/'+id_examen+'/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa]);
}

alumExamenRecupera(id_examen: number){
  this.router.navigate(['Examen/alum_recuperacion/'+id_examen]);
}
}
