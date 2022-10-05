import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videos, Usuario, Profesores } from 'src/app/interfaces/interfaces';
import { ProfesoresService } from '../../services/profesores.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NumberSymbol } from '@angular/common';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videosalum',
  templateUrl: './videosalum.component.html',
  styleUrls: ['./videosalum.component.css']
})
export class VideosalumComponent implements OnInit {

  pathIm = environment.pathImgs;
  videos : Videos[] = [];
  bienvenida=false;
  usuario !: Usuario;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;
  alumno !: number;
  dataprofesor !: Profesores;
  user !: any;

  constructor(private acRouter:ActivatedRoute,
    private apiAlid:ProfesoresService,
    private router: Router,
    private _sanitizer: DomSanitizer,
    private authservice: AuthService
) { }

  ngOnInit(): void {
    this.user = this.authservice.getUser();
    this.acRouter.params.subscribe(param => {

      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];
      this.profesor = param['profesor'];

      this.apiAlid.listarVideosAlum(this.tipo_prog,this.programa,this.profesor)
      .subscribe((res: any) => {

        console.log(res);


        if (res.sucess == true) {
          this.videos = res.videos;
          this.dataprofesor = res.profesor;

        }else{
          Swal.fire('No hay registros disponibles')
        }
      });

    })
  }

  pag_principal(tipo:number, usuario:number, perfil:number){
    this.router.navigateByUrl('/Programasprf/'+tipo+'/'+usuario+'/'+perfil);

  }

  getURL(url:any) {

       return this._sanitizer.bypassSecurityTrustResourceUrl(url);
 }


}
