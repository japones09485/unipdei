import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Usuario,Paises } from "../../interfaces/interfaces";
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  Usuarios : Usuario[] = [];
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

    this.auth.listUsuarios()
    .subscribe((res:any)=>{
      this.Usuarios = res.data;

    });

  }

  estado(estado:number){
    if(estado == 1){
      return 'Activo';
    }else{
      return 'Inactivo';
    }

  }

  eliminarusuario(id:number){
    this.auth.deleteusuario(id)
    .subscribe((res:any)=>{
      this.Usuarios = res.data;
    });
  }

  banderaPais(bandera: any) {
    console.log(bandera);
    let infopais = this.paises[bandera].flag;
    this.nombrePais = this.paises[bandera].nombre;
    const flagPais = this.pathImg +'imagenes/paises/'+ infopais;
    this.imgCountry = flagPais;
   return this.imgCountry;

   }


}
