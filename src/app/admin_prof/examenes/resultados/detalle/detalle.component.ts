import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesoresService } from '../../../../services/profesores.service';
import { AuthService } from '../../../../services/auth.service';
import { info_detalle,detalle_preg } from 'src/app/interfaces/interfaces';
import { ProfesorComponent } from 'src/app/admin/profesores/profesor/profesor.component';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id_presentacion !: number;
  info !: info_detalle;
  detalle : any;
  alumno !: string;
  nomexamen !: string;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;
  id_examen !: number;

  constructor(private apiAlid: ProfesoresService,
    private authApi:AuthService,
    private router:Router,
    private acRouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.acRouter.params.subscribe(param => {
      this.id_presentacion = param['id_pres'];
      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];
      this.programa = param['programa'];
      this.id_examen = param['id_examen'];

      this.apiAlid.resultadosExamen(this.id_presentacion)
        .subscribe((res: any) => {
          this.apiAlid.verResultado(this.id_presentacion)
          .subscribe((res: any) => {

           this.info = res.info[0];
           this.detalle = res.preguntas;
           this.alumno = this.info.alumno;
           this.nomexamen = this.info.examen;
          });
        });
    });




  }

}
