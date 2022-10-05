import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, Videos } from '../../../interfaces/interfaces';
import { ProfesoresService } from '../../../services/profesores.service';
import {AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  id_empresa !: number;
  id_video !: number;
  frmClasCreator !: FormGroup;
  frmGuardar = new FormData();
  frmAlumCreator !: FormGroup;
  alumGuardar = new FormData();
  video !: Videos;
  mensaje !: string;
  sucess !:boolean;
  user !: Usuario;
  estadoex !: boolean;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;
  edit !: number;


  constructor(private fb: FormBuilder,
              private apiAlid: ProfesoresService,
              private authApi:AuthService,
              private router:Router,
              private acRouter: ActivatedRoute,) { }

  ngOnInit(): void {

    this.initForm();
    this.user = this.authApi.getUser();
    this.acRouter.params.subscribe(param => {
      this.id_video = param['id_video'];
      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];
      this.edit = param['edit'];

      if(this.id_video >0){

        this.apiAlid.VideoId(this.id_video,this.tipo_prog,this.programa,this.profesor)
        .subscribe((res:any)=>{
          this.video = res.video;
          this.chargeForm();

        });

      }

    });
  }



  initForm(){
    this.frmClasCreator = this.fb.group({
      titulo: ['', Validators.required],
      descrip: ['', Validators.required],
      ruta: ['', Validators.required]

    });
  }

  chargeForm(){

    this.frmClasCreator.patchValue({
      titulo:this.video.vid_titulo,
      descrip:this.video.vid_descripcion,
      ruta: this.video.vid_ruta,

    });
  }

  crearVideo(){

    const payload = {
      id_video: this.id_video,
      tipo: this.tipo_prog,
      profesor: this.profesor,
      programa: this.programa,
      data: this.frmClasCreator.value
    };


    if(this.id_video ==0){

      this.apiAlid.crearVideo(payload)
      .subscribe((res:any)=>{
        this.mensaje = res.mensaje;
        this.sucess = true;
        Swal.fire('Video creado exitosamente')
       this.router.navigateByUrl('/Programas_prof/videos/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa);


      });
    }else{

      this.apiAlid.crearVideo(payload)
      .subscribe((res:any)=>{
        this.mensaje = res.mensaje;
        this.sucess = true;
        Swal.fire('Video editado exitosamente')
        this.router.navigateByUrl('/Programas_prof/videos/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa);

      });
    }

  }

}

