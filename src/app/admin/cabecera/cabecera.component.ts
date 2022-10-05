import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private auth:AuthService,
    public router: Router) { }

  ngOnInit(): void {
  }

  getOut() {
    this.auth.logOut();
    this.router.navigateByUrl('/home');

  }

}
