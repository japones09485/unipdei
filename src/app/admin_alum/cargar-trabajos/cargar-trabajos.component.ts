import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, trabajos_alumnos} from '../../interfaces/interfaces';
import { ProfesoresService } from '../../services/profesores.service';
import {AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cargar-trabajos',
  templateUrl: './cargar-trabajos.component.html',
  styleUrls: ['./cargar-trabajos.component.css']
})
export class CargarTrabajosComponent implements OnInit {

  id_empresa !: number;
  frmClasCreator !: FormGroup;
  frmGuardar = new FormData();
  frmAlumCreator !: FormGroup;
  alumGuardar = new FormData();
  trabajo !: trabajos_alumnos;
  mensaje !: string;
  sucess !:boolean;
  user !: Usuario;
  estadoex !: boolean;
  alumno !: number;
  id_trabajo !: number;
  namearchivo !: string;
  valinamearchivo = false;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;


  constructor(private fb: FormBuilder,
              private apiAlid: ProfesoresService,
              private authApi:AuthService,
              private router:Router,
              private acRouter: ActivatedRoute,) { }

  ngOnInit(): void {

    this.initForm();
    this.user = this.authApi.getUser();
    this.acRouter.params.subscribe(param => {
      this.id_trabajo = param['idtrabajo'];
      this.alumno = param['alumno'];

      this.apiAlid.ValidarcargueTrabajo(this.id_trabajo,this.alumno)
      .subscribe((res:any)=>{
        console.log(res);

        if(res.success == true){
          this.trabajo = res.data;
          this.chargeForm();
          this.valinamearchivo = true;
          this.namearchivo = res.namearchivo;
          this.profesor = res.fk_profesor;
          this.tipo_prog = res.fk_tipo_programa;
          this.programa = res.fk_programa;
          console.log(this.namearchivo);

        }
      });
    });

   }


  initForm(){
    this.frmClasCreator = this.fb.group({
      comentario: ['', Validators.required],

    });
  }

  chargeForm(){

    this.frmClasCreator.patchValue({
      comentario:this.trabajo.comentario,

    });
  }



  crearTrabajo(){


    const payload = {
      id_trabajo: this.id_trabajo,
      alumno: this.alumno,
      data: this.frmClasCreator.value
    };
    console.log(payload);




    this.frmGuardar.append('data', JSON.stringify(payload));
    this.frmGuardar.append('id_trabajo', JSON.stringify(this.id_trabajo));
    this.frmGuardar.append('alumno', JSON.stringify(this.alumno));



      this.apiAlid.cargarTrabajoAlum(this.frmGuardar)
      .subscribe((res:any)=>{
        this.mensaje = res.mensaje;
        this.sucess = true;
        Swal.fire(this.mensaje)
        this.router.navigateByUrl('/prof_trabajos/'+2+'/'+res.tipo_programa+'/'+res.profesor+'/'+res.programa+'/'+2);

      });


  }

  agregarArchivo(event: any, numImg: number) {
    const imgs: any = event.target;

    if (imgs.files.length > 0) {
      this.frmGuardar.append(`${numImg}`, imgs.files[0]);
    }


  }


}
