import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Examen, Usuario } from 'src/app/interfaces/interfaces';
import { ProfesoresService } from '../../services/profesores.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NumberSymbol } from '@angular/common';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-examenesalum',
  templateUrl: './examenesalum.component.html',
  styleUrls: ['./examenesalum.component.css']
})
export class ExamenesalumComponent implements OnInit {

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
  pathImg = environment.pathImgs;

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
      this.profesor = param['profesor'];


      this.apiAlid.listarExamenesAlum(this.tipo_prog,this.profesor,this.programa,this.user.usu_id)
        .subscribe((res: any) => {
          if (res.sucess == true) {
            this.examenes = res.data;
          }
        });

    });

  }

  Presentarex(idexamen:number,tipo_pro:number,profesor:number,programa:number,alumno:number){
    this.router.navigate(['presentarex/'+idexamen+'/'+tipo_pro+'/'+profesor+'/'+programa+'/'+alumno]);
  }



}
