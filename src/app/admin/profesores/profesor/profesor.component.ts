import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Paises, Usuario } from 'src/app/interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  frmCr!: FormGroup;
  frmGuardar = new FormData();
  id !: number;
  pathImg = environment.pathImgs;
  path = environment.apiURL;
  flagSave !: boolean;
  edit !: boolean;
  mostrarMsj !: boolean;
  mensaje !: String;
  usuario !: number;
  user !: Usuario;
  ProfesorData: any = {};
  paisesList: Paises[] = [];
  paises: Paises[] = [];
    nombrePais !: String;
  imgCountry !: String;
  seleccionado !: String;

  constructor(public auth: AuthService,
    private acRouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {

    //listado de paises
    this.inicializarFormulario();
    this.auth.getPaisesList()
    .subscribe((res:any)=>{
      this.paisesList = res.data
    });

    this.auth.getPaises()
    .subscribe((res:any)=>{
      this.paises = res.data
    });

    this.user = this.auth.getUser();
    this.acRouter.params.subscribe(param => {
      this.id = param["id"];
      if (this.id != 0) {
        this.edit = true;
        this.auth.get_profesor(this.id)
          .subscribe((res: any) => {
            this.ProfesorData = res.data;
            this.banderaPais(this.ProfesorData.pro_pais);
            this.infoForm();

          });
      } else {
        this.inicializarFormulario();
      }
    });

  }

  agregarArchivo(event: any, numImg: number) {
    const imgs: any = event.target;
    if (imgs.files.length > 0) {
      this.frmGuardar.append(`${numImg}`, imgs.files[0]);
    }
  }

  inicializarFormulario() {
    this.frmCr = this.fb.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      estado: ['', Validators.required],
      pais: ['', Validators.required],

    });
  }

  infoForm() {

    this.frmCr = this.fb.group({
      identificacion: [this.ProfesorData.pro_identificacion, Validators.required],
      nombre: [this.ProfesorData.pro_nombres, Validators.required],
      apellidos: [this.ProfesorData.pro_apellidos, Validators.required],
      email: [this.ProfesorData.pro_email, [Validators.required, Validators.email]],
      telefono: [this.ProfesorData.pro_telefono, Validators.required],
      estado: [this.ProfesorData.pro_estado, Validators.required],
      pais: [this.ProfesorData.pro_pais, Validators.required],
    });



  }

  guardarProfesor() {
    this.flagSave = true;
    const payload = {
      data: this.frmCr.value
    };

    this.frmGuardar.append('data', JSON.stringify(payload));
    this.frmGuardar.append('id', JSON.stringify(this.id));
    this.frmGuardar.append('usuario', JSON.stringify(this.user));
    this.auth.guardarProfesor(this.frmGuardar)
      .subscribe((res: any) => {

        this.flagSave = false;
        if (res.ok === true) {
          this.ProfesorData = res.data;
          this.mensaje = 'Editado correctamente';
          this.mostrarMsj = true;
          setTimeout(() => {
            this.mostrarMsj = false;
          }, 5000);

          this.router.navigate(['/AdminProfesor/' + this.ProfesorData.pro_id]);
        }
      });
  }


  banderaPais(bandera: any) {
console.log(this.paises);

    let infopais = this.paises[bandera].flag;
    this.nombrePais = this.paises[bandera].nombre;
    const flagPais = this.pathImg +'imagenes/paises/'+ infopais;
    this.imgCountry = flagPais;
   }



}
