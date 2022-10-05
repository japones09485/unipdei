import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Paises, Usuario } from 'src/app/interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {


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
  Alumno: any = {};
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
        this.auth.get_alumno(this.id)
          .subscribe((res: any) => {
            this.Alumno = res.data;

            this.banderaPais(this.Alumno.alum_pais);
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
      identificacion: [this.Alumno.alum_identificacion, Validators.required],
      nombre: [this.Alumno.alum_nombres, Validators.required],
      apellidos: [this.Alumno.alum_apellidos, Validators.required],
      email: [this.Alumno.alum_email, [Validators.required, Validators.email]],
      telefono: [this.Alumno.alum_telefono, Validators.required],
      estado: [this.Alumno.alum_estado, Validators.required],
      pais: [this.Alumno.alum_pais, Validators.required],
    });



  }

  guardarAlumno() {
    this.flagSave = true;
    const payload = {
      data: this.frmCr.value
    };

    this.frmGuardar.append('data', JSON.stringify(payload));
    this.frmGuardar.append('id', JSON.stringify(this.id));
    this.frmGuardar.append('usuario', JSON.stringify(this.user));
    this.auth.guardarAlumnos(this.frmGuardar)
      .subscribe((res: any) => {

        this.flagSave = false;

          this.Alumno = res.data;
          this.mensaje = res.mensaje;
          this.mostrarMsj = true;
          setTimeout(() => {
            this.mostrarMsj = false;
            if(res.ok == true){
              this.router.navigate(['/AdminAlumnos/0']);
            }
          }, 5000);




      });
  }


  banderaPais(bandera: any) {

    let infopais = this.paises[bandera].flag;
    this.nombrePais = this.paises[bandera].nombre;
    const flagPais = this.pathImg +'imagenes/paises/'+ infopais;
    this.imgCountry = flagPais;
   }



}
