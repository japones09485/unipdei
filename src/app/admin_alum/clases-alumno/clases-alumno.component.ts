import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videos, Usuario, Profesores, clases } from 'src/app/interfaces/interfaces';
import { ProfesoresService } from '../../services/profesores.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NumberSymbol } from '@angular/common';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-clases-alumno',
  templateUrl: './clases-alumno.component.html',
  styleUrls: ['./clases-alumno.component.css']
})
export class ClasesAlumnoComponent implements OnInit {

  pathIm = environment.pathImgs;
  clases : clases[] = [];
  bienvenida=false;
  usuario !: Usuario;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;
  alumno !: number;
  dataprofesor !: Profesores;
  user !: any;
  activationplan !: boolean;

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

      this.apiAlid.listarClasesAlum(this.tipo_prog,this.programa,this.profesor)
      .subscribe((res: any) => {


        if (res.sucess == true) {
          this.clases = res.clases;
          this.dataprofesor = res.profesor;
          this.activationplan = true;

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
