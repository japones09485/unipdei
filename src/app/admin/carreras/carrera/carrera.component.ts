import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Carreras, Usuario } from 'src/app/interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {
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
  carrera: any = {};
  editfotos !: boolean;
  checked1: boolean = false;
  checked2: boolean = true;
  login !: any;


  constructor(public auth: AuthService,
    private acRouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.user = this.auth.getUser();

    this.inicializarFormulario();
    this.acRouter.params.subscribe(param => {
      this.id = param["id"];
      if (this.id != 0) {
        this.edit = true;

        this.auth.get_carrera(this.id)
          .subscribe((res: any) => {

            this.carrera = res.data;

            this.infoForm();

          });

      } else {
        this.inicializarFormulario();
        this.editfotos = true;
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

      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
      link_arg: ['', Validators.required],
      link_pago:['', Validators.required]
    });
  }

  infoForm() {
    this.frmCr = this.fb.group({
      nombre: [this.carrera?.nombre, Validators.required],
      descripcion: [this.carrera?.descripcion, Validators.required],
      estado: [this.carrera?.estado, Validators.required],
      link_arg: [this.carrera?.link_argentina, Validators.required],
      link_pago:[this.carrera?.link_pago, Validators.required]
    });



  }

  guardarCarrera() {
    this.flagSave = true;
    const payload = {
      data: this.frmCr.value
    };

    this.frmGuardar.append('data', JSON.stringify(payload));
    this.frmGuardar.append('id', JSON.stringify(this.id));
    this.frmGuardar.append('usuario', JSON.stringify(this.user));
    this.auth.guardarCarrera(this.frmGuardar)
      .subscribe((res: any) => {

        this.flagSave = false;
        if (res.ok === true) {
          this.carrera = res.data;
          this.mensaje = 'Editado correctamente';
          this.mostrarMsj = true;
          setTimeout(() => {
            this.mostrarMsj = false;
          }, 5000);
          this.editfotos = false;
          this.router.navigate(['/AdminCarrera/' + this.carrera.id]);
        }
      });
  }

  cambiar_imagenes(event:any) {
    var cambiarimg = event.target.checked;
    if (cambiarimg) {
      this.editfotos = true;
    } else {
      this.editfotos = false;
    }
  }





}
