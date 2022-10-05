import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cant_programas, Usuario } from 'src/app/interfaces/interfaces';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-homepro',
  templateUrl: './homepro.component.html',
  styleUrls: ['./homepro.component.css']
})
export class HomeproComponent implements OnInit {
  user !: Usuario;
  cant_carreras !: number;
  cant_cursos !: number;
  cant_diplomados !: number;


  constructor(private router: Router,
            public auth: AuthService) { }

  ngOnInit(): void {

    this.user = this.auth.getUser();

    if(this.user.usu_perfil == 2){
    this.auth.cant_programas(this.user.usu_id)
   .subscribe((res:any)=>{
    this.cant_carreras = res.cant_carrer;
    this.cant_cursos = res.cant_cur;
    this.cant_diplomados = res.cant_diplo;

   });

  }else if(this.user.usu_perfil == 3){
    this.auth.cant_programasalum(this.user.usu_id)
   .subscribe((res:any)=>{
    this.cant_carreras = res.cant_carrer;
    this.cant_cursos = res.cant_cur;
    this.cant_diplomados = res.cant_diplo;

   });

  }

  }

  programas(tipo:number, usuario:number, perfil:number){
    this.router.navigateByUrl('/Programasprf/'+tipo+'/'+usuario+'/'+perfil);
  }

}
