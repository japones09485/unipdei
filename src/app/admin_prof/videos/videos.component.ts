import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesores,Videos } from 'src/app/interfaces/interfaces';
import { ProfesoresService } from '../../services/profesores.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {


  videos: Videos[] = [];
  profesor !: number;
  tipo_prog !: number;
  programa !: number;
  pathImg = environment.pathImgs;
  tipo_edit !: number;
  dataprofesor !: Profesores;
  user !: any;


  constructor(private router: Router,
    private apiAlid: ProfesoresService,
    private authservice: AuthService,
    private _sanitizer: DomSanitizer,
    private acRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.authservice.getUser();
    this.acRouter.params.subscribe(param => {

      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['id_prog'];
      this.tipo_edit =  param['tipo_edit'];

        this.apiAlid.listarVideos(this.tipo_prog,this.profesor,this.programa)
        .subscribe((res: any) => {

          if (res.sucess == true) {
            this.videos = res.videos;
            this.dataprofesor = res.profesor;

          }else{
            Swal.fire('No hay registros disponibles')
          }
        });


    });
  }

  nuevoVideo(id_video:number,tipo:number,profesor:number,programa:number){

    this.router.navigate(['Programas_prof/video/'+id_video+'/'+tipo+'/'+profesor+'/'+programa]);
  }

  eliminarVideo(id_video:number,tipo:number,profesor:number,programa:number){
    Swal.fire({
      title: 'Desea eliminar este video?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.apiAlid.eliminarVideo(id_video,tipo,programa,profesor)
        .subscribe((res: any) => {
          this.videos = res.videos;
          Swal.fire('Video eliminado exitosamente!', '', 'success');

        });

      }


    })
  }

  cambiarestado(id_video:number, estado:number){
    this.apiAlid.cambiarestadoVideo(id_video,estado,this.tipo_prog,this.profesor,this.programa)
    .subscribe((res: any) => {
      this.videos = res.videos;
      Swal.fire('Video eliminado exitosamente!', '', 'success');

    });
  }

}
