import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Usuario } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent implements OnInit {

  user !: Usuario;

  constructor(private auth:AuthService,
              public router: Router) { }

  ngOnInit(): void {
  }

  getOut() {
    this.auth.logOut();
    this.router.navigateByUrl('/home');

  }

}
