import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Usuario, Examen, Pregunta, Respuesta } from '../../../interfaces/interfaces';
import { ProfesoresService } from '../../../services/profesores.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-presentarex',
  templateUrl: './presentarex.component.html',
  styleUrls: ['./presentarex.component.css']
})
export class PresentarexComponent implements OnInit {

  alumno !: number;
  id_examen !: number;
  numpreg !: number;
  frmClasCreator !: FormGroup;
  frmGuardar = new FormData();
  examen !: Examen;
  mensaje !: string;
  sucess !: boolean;
  user !: Usuario;
  idExamen !: number;
  arrnumpreg = [];
  preguntas: Pregunta[] = [];
  respuestas: any;
  msjintro !: number;
  nombreExamen !: String;
  nombreDescrip !: String;
  inicioExamen !: boolean;
  presentacion = [];
  valitiempo !: boolean;
  duracionF !: number;
  validboton=true;
  mostrar_info = false;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;


  constructor(private fb: FormBuilder,
    private apiAlid: ProfesoresService,
    private authApi: AuthService,
    private router: Router,
    private acRouter: ActivatedRoute) { }


  ngOnInit(): void {

    this.user = this.authApi.getUser();


    this.acRouter.params.subscribe(param => {

      this.id_examen = param['idexamen'];
      this.alumno = param['alumno'];
      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];



      this.apiAlid.ExamenId(this.id_examen,this.tipo_prog,this.programa)
        .subscribe((res: any) => {

          this.examen = res.examen;
          this.idExamen = this.examen.id_examen;
          this.numpreg = this.examen.numero_preguntas;
          this.nombreExamen = this.examen.nombre;
          this.nombreDescrip = this.examen.descripcion;
          this.msjintro = this.examen.duracion;

          const infoPres = {
            alumno: this.user.usu_id,
            idexamen: this.idExamen,
            idempresa: this.alumno
          };


          this.apiAlid.list_preguntas(this.id_examen)
            .subscribe((res: any) => {
              this.preguntas = res.preguntas;

            });

          this.apiAlid.list_respuestas_prese(this.id_examen)
            .subscribe((res: any) => {
              this.respuestas = res.respuestas;
            });


          this.apiAlid.validar_prese(infoPres)
            .subscribe((res: any) => {

              if (res.sucess == true && res.estado == 0) {

                Swal.fire({
                  title: 'Desea presentar el examen?',
                  text: res.mensaje,
                  icon: 'info',
                  showDenyButton: true,
                  confirmButtonText: 'Presentar',
                  denyButtonText: `No presentar`,
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {

                    this.iniciarExamen(this.idExamen, this.user.usu_id);
                    Swal.fire('Buena suerte!', '', 'success')
                  } else if (result.isDenied) {
                    this.router.navigate(['ExamenesAlum/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa+'/'+this.alumno]);
                  }
                })
              } else if (res.sucess == false && res.estado == 1) {
                Swal.fire({
                  title: 'Examen presentado',
                  text:  res.mensaje,
                  icon: 'warning',
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Continuar!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.router.navigate(['ExamenesAlum/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa+'/'+this.alumno]);
                  }
                })
              } else if (res.sucess == false && res.estado == 2) {
                Swal.fire({
                  title: 'Mensaje de usuario',
                  text:  res.mensaje,
                  icon: 'warning',
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Continuar!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    this.router.navigate(['ExamenesAlum/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa+'/'+this.alumno]);
                  }
                })
              }
            });

        });
    });
  }

  guardarResp(r:any) {

    const payload = {
      alumno: this.user.usu_id,
      data: r.value,
      idexamen: this.idExamen,
      idempresa: this.alumno
    };


    this.apiAlid.guardarRespuestasAlum(payload)
      .subscribe((res: any) => {

        this.sucess = true;
        this.mensaje = res.mensaje;

        Swal.fire({
          title: 'Examen guardado exitosamante',
          text:  res.mensaje,
          icon: 'warning',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Continuar!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['ExamenesAlum/'+this.tipo_prog+'/'+this.user.usu_id+'/'+this.programa]);
          }
        })

      });


  }

  iniciarExamen(idExamen:number, idUsuario:number) {
    this.mostrar_info = true;
    const payload = {
      alumno: idUsuario,
      idexamen: idExamen,
      idempresa: this.alumno
    };

    this.apiAlid.iniciarExamen(payload)
      .subscribe((res: any) => {
        this.inicioExamen = true;
      });

  }
}
