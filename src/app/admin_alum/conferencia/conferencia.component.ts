import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesoresService } from '../../services/profesores.service';
import { AuthService } from '../../services/auth.service';
import  { Usuario,clases } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
declare var JitsiMeetExternalAPI: any;
@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
export class ConferenciaComponent implements OnInit {
  jitsi: any;
  optionjitsi: any;
  domain !: string;
  user !: Usuario;
  clase !: clases;

  constructor(private activatedRoute:ActivatedRoute,
              private api: ProfesoresService,
              private apiAuth: AuthService,
              private router: Router ) { }

  ngOnInit(): void {
    this.user = this.apiAuth.getUser();
    this.activatedRoute.params.subscribe(params => {
      this.api.ClaseId(params['id'])
      .subscribe((res:any)=>{
        this.clase = res.clase;
       this.iniciarjitsi(this.clase.clas_nombre,this.clase.clas_id);

      });

    });
  }


  iniciarjitsi(name:string,id:number) {


    var namesala:string='Unipdei'+id+name;
    var nameAlumno = this.user.usu_nombres+' '+this.user.usu_apellidos;
    this.domain = 'meet.jit.si';
    this.optionjitsi = {
       roomName:namesala,
       width: 1100,
       height: 580,
       parentNode: document.querySelector('#meeting'),
       userInfo: {
        email: 'email@jitsiexamplemail.com',
        displayName: nameAlumno
    }
     };

     this.jitsi = new JitsiMeetExternalAPI(this.domain, this.optionjitsi);

   }

   pag_principal(tipo:number, usuario:number, perfil:number){
    this.router.navigateByUrl('/ClasesAlum/'+tipo+'/'+usuario+'/'+perfil);

  }

}
