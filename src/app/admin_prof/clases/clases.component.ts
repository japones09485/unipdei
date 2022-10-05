import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesores, clases, Usuario } from 'src/app/interfaces/interfaces';
import { ProfesoresService } from '../../services/profesores.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  clases: clases[] = [];
  profesor !: number;
  tipo_prog !: number;
  programa !: number;
  tipo_doc !: number;
  pathImg = environment.pathImgs;
  tipo_edit !: number;
  dataprofesor !: Profesores;
  user !: any;
  activationplan !: boolean;


  constructor(private router: Router,
    private api: ProfesoresService,
    private authservice: AuthService,
    private _sanitizer: DomSanitizer,
    private acRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.user = this.authservice.getUser();
    this.acRouter.params.subscribe(param => {

      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['id_prog'];


        if(this.user.usu_perfil==2){

          this.api.listarclases(this.tipo_prog,this.profesor,this.programa)
          .subscribe((res: any) => {
            this.activationplan = true;
            if (res.success == true) {
              this.clases = res.clases;
              this.dataprofesor = res.profesor_data;

            }else{
              Swal.fire('No hay registros disponibles')
            }
          });

        }else if(this.user.usu_perfil==3){

          this.api.listarclases(this.tipo_prog,this.profesor,this.programa)
          .subscribe((res: any) => {

            if (res.sucess == true) {
              this.clases = res.clases;
              this.dataprofesor = res.profesor;

            }else{
              Swal.fire('No hay registros disponibles')
            }
          });

        }

    });
  }

  nuevaClase(id_clase:number,tipo:number,profesor:number,programa:number,edit:number){
    this.router.navigate(['Programas_prof/Clase/'+id_clase+'/'+tipo+'/'+profesor+'/'+programa+'/'+edit]);
  }

  eliminarClase(id_clase:number,tipo:number,profesor:number,programa:number){
    Swal.fire({
      title: 'Desea eliminar esta clase?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.api.eliminarClase(id_clase,tipo,programa,profesor)
        .subscribe((res: any) => {
          this.clases = res.clases;
          Swal.fire('Clase eliminado exitosamente!', '', 'success');

        });

      }


    })
  }

  cambiarestado(id_clase:number ,estado: number){

    this.api.estadoClases(id_clase,estado,this.tipo_prog,this.programa,this.profesor)
    .subscribe((res: any) => {
      this.clases = res.clases;
      this.dataprofesor = res.profesor_data;
      Swal.fire('Clase editada exitosamente')
    });
  }

  IngresarClase(clase:clases){

    if (! this.user) {
      Swal.fire('Para acceder a las clases en vivo debe registrarse en nuestra pagina.');
    }else{
      if(this.activationplan ==true){
        this.router.navigate( ['/conferencia',clase.clas_id] );
      }else{
        Swal.fire('Para obtener todo el contenido en vivo adquiere alguno de nuestros planes.');
      }
    }

  }
}
