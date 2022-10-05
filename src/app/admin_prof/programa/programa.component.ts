import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Respprogras, Usuario } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { ProfesoresService } from "../../services/profesores.service";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {

  tipo !: number;
  usuario !: number;
  carreras : Respprogras[] = [];
  cursos : Respprogras[] = [];
  diplomados : Respprogras[] = [];
  pathImg = environment.pathImgs;
  validcarreras = false;
  validcursos = false;
  validdiplomados = false;
  profesor !: number;
  tipo_prog !: number;
  perfil !: number;
  user !: Usuario;

  constructor(private router: Router,
              private service:ProfesoresService,
              private authApi:AuthService,
              private acRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.authApi.getUser();

    this.acRouter.params.subscribe(param => {
      this.profesor  = param['prof'];
      this.tipo_prog  = param['tipo'];
      this.perfil  = param['perfil'];


      if(this.perfil == 2){
        this.service.getCarreras(param['tipo'],param['prof'])
        .subscribe((res:any)=>{

          if(this.tipo_prog == 1){
           //carreras
           this.validcarreras = true;
           this.carreras = res.data['carreras'];

          }else if(this.tipo_prog == 2){
            //cursos
            this.validcursos = true;
            this.cursos = res.data['cursos'];
          }else if(this.tipo_prog == 3){
            //diplomados
            this.validdiplomados = true;
            this.diplomados = res.data['diplomados'];
          }


        })

      }else if(this.perfil == 3){
        this.service.getCarrerasAlum(param['tipo'],param['prof'])
        .subscribe((res:any)=>{


          if(this.tipo_prog == 1){
           //carreras
           this.validcarreras = true;
           this.carreras = res.data;

          }else if(this.tipo_prog == 2){
            //cursos
            this.validcursos = true;
            this.cursos = res.data;
          }else if(this.tipo_prog == 3){
            //diplomados
            this.validdiplomados = true;
            this.diplomados = res.data;
          }


        })
      }

    });

  }

  alumnos(id_prog:number){
    this.router.navigateByUrl('/AdminAlumnos/'+this.tipo_prog+'/'+this.profesor+'/'+id_prog);
  }


  examenes(id_prog:number){
    this.router.navigateByUrl('/Examenes/'+this.tipo_prog+'/'+this.profesor+'/'+id_prog);
  }

  administrar(id_prog:number){
    this.router.navigateByUrl('/AdminAlumnos/1');
  }

  trabajos(tipo_doc:number,id_prog:number,tipo_edit:number,profesor:number){
    this.router.navigateByUrl('/prof_trabajos/'+tipo_doc+'/'+this.tipo_prog+'/'+profesor+'/'+id_prog+'/'+tipo_edit);
  }

  alumexamenes(id_prog:number,profesor:number){

    this.router.navigateByUrl('/ExamenesAlum/'+this.tipo_prog+'/'+profesor+'/'+id_prog+'/'+this.user.usu_id);

  }


  videos(id_prog:number){

    this.router.navigateByUrl('/Programas_prof/videos/'+this.tipo_prog+'/'+this.profesor+'/'+id_prog);

  }

  Clases(id_prog:number){

    this.router.navigateByUrl('/Programas_prof/ClasesProf/'+this.tipo_prog+'/'+this.profesor+'/'+id_prog);

  }

  videosAlum(id_prog:number,profesor:number){

    this.router.navigateByUrl('/VideosAlum/'+this.tipo_prog+'/'+profesor+'/'+id_prog);

  }

  clasesAlum(id_prog:number,profesor:number){

    this.router.navigateByUrl('/ClasesAlum/'+this.tipo_prog+'/'+profesor+'/'+id_prog);

  }
}
