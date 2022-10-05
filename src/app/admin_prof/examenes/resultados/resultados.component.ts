import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesoresService } from '../../../services/profesores.service';
import { AuthService } from '../../../services/auth.service';
import { Resultados } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  id_examen !:number;
  resultados : any;
  profesor !: number;
  tipo_prog !: number;
  programa !: number;

  constructor(  private apiAlid: ProfesoresService,

    private router:Router,
    private acRouter: ActivatedRoute) { }

  ngOnInit(): void {


    this.acRouter.params.subscribe(param => {
      this.id_examen = param['id_examen'];
      this.profesor = param['profesor'];
      this.tipo_prog = param['tipo'];
      this.programa = param['programa'];

      this.apiAlid.resultadosExamen(this.id_examen)
        .subscribe((res: any) => {
          if (res.sucess == true) {

            this.resultados = res.resultados;
          }
        });
    });

  }

  verResultado(id_pres:number){
    this.router.navigate(['DetalleExamenes/'+this.id_examen+'/'+id_pres+'/'+this.tipo_prog+'/'+this.profesor+'/'+this.programa]);
  }

}
