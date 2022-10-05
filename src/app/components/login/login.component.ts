import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { Perfil,ResLogin,Usuario } from "../../interfaces/interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  perfiles : Perfil[] = [];
  frmCliCreator !: FormGroup;
  frmGuardar = new FormData();
  user !: Usuario;
  mensaje !: String;
  visible = false;

  constructor(private auth:AuthService,
              private fb: FormBuilder,
              private router: Router) {
              }

  ngOnInit(): void {
    this.inicializarForm();
    this.auth.getPerfiles()
    .subscribe((res:any)=>{
     this.perfiles = res.data;
    });
  }

  inicializarForm() {
    this.frmCliCreator = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      perfil: ['', Validators.required],

    });
  }

  login(){
    this.auth.logIn(this.frmCliCreator.value)
    .subscribe((res:any) => {


      if (res.status === true) {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('user', JSON.stringify(res.user));
        this.auth .setUser(res.user);
        console.log(res.user);
        this.user = res.user;

        if(this.user.usu_perfil==1){
          this.router.navigateByUrl('/AdminCarreras');
        }else if(this.user.usu_perfil==2 ){
          this.router.navigateByUrl('/Homerprof');
        }else if(this.user.usu_perfil==3 ){
          this.router.navigateByUrl('/Homerprof');
        }

      } else {
        this.mensaje = 'Error en credenciales de acceso';
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 5000);

        this.frmCliCreator.reset();

      }

    });

  }

}
