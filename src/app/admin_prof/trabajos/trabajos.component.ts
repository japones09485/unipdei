import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesores, trabajos, Usuario } from 'src/app/interfaces/interfaces';
import { ProfesoresService } from '../../services/profesores.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

  trabajos: trabajos[] = [];
  profesor !: number;
  tipo_prog !: number;
  programa !: number;
  tipo_doc !: number;
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
      this.tipo_doc = param['tipo_doc'];
      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];
      this.tipo_edit =  param['tipo_edit'];

        if(this.user.usu_perfil==2){

          this.apiAlid.listarTrabajos(this.tipo_prog,this.profesor,this.programa,this.tipo_doc)
          .subscribe((res: any) => {

            if (res.sucess == true) {
              this.trabajos = res.trabajos;
              this.dataprofesor = res.profesor;

            }else{
              Swal.fire('No hay registros disponibles')
            }
          });

        }else if(this.user.usu_perfil==3){

          this.apiAlid.listarTrabajos(this.tipo_prog,this.profesor,this.programa,this.tipo_doc)
          .subscribe((res: any) => {

            if (res.sucess == true) {
              this.trabajos = res.trabajos;
              this.dataprofesor = res.profesor;

            }else{
              Swal.fire('No hay registros disponibles')
            }
          });

        }

    });
  }

  nuevoTrabajo(id_trabajo:number,tipo:number,profesor:number,programa:number,edit:number,tipo_doc:number){
    this.router.navigate(['Trabajo/'+id_trabajo+'/'+tipo+'/'+profesor+'/'+programa+'/'+edit+'/'+tipo_doc]);
  }

  eliminarTrabajo(id_trabajo:number,tipo:number,profesor:number,programa:number){
    Swal.fire({
      title: 'Desea eliminar este trabajo?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.apiAlid.eliminarTrabajo(id_trabajo,tipo,programa,profesor,this.tipo_doc)
        .subscribe((res: any) => {
          this.trabajos = res.trabajos;
          Swal.fire('Examen eliminado exitosamente!', '', 'success');

        });

      }


    })
  }
}
