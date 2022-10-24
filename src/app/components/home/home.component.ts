import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Carreras, Cursos } from "../../interfaces/interfaces";
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  load:boolean = false;
  carreras : Carreras[] = [];
  pathImg = environment.pathImgs;


  constructor(private auth:AuthService,
    public router: Router,
    private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.auth.listFrontProgramas()
    .subscribe((res:any)=>{
     this.carreras = res.data;
    });
    setTimeout(() => {
      this.load = true;
    }, 2000);

  }

}
