import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Profesores,Paises } from "../../interfaces/interfaces";
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  Profesores : Profesores[] = [];
  id !: number;
  paisesList: Paises[] = [];
  paises: Paises[] = [];
  nombrePais !: String;
  imgCountry !: String;
  banderaimg !: String;
  pathImg = environment.pathImgs;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {

    this.auth.getPaisesList()
    .subscribe((res:any)=>{
      this.paisesList = res.data
    });

    this.auth.getPaises()
    .subscribe((res:any)=>{
      this.paises = res.data

    });

    this.auth.listProfesores()
    .subscribe((res:any)=>{
      this.Profesores = res.data;

    });

  }

  estado(estado:number){
    if(estado == 1){
      return 'Activo';
    }else{
      return 'Inactivo';
    }

  }

  eliminarprofesor(id:number){
    this.auth.deleteprofesor(id)
    .subscribe((res:any)=>{
      this.Profesores = res.data;
    });
  }

  banderaPais(bandera:any,id:number) {
      console.log(bandera);
      let infopais = this.paises[bandera].flag;
      this.nombrePais = this.paises[bandera].nombre;
      const flagPais = this.pathImg +'imagenes/paises/'+ infopais;
      this.imgCountry = flagPais;

    return this.imgCountry;
   }


}
