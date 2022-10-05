import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-menu-prf',
  templateUrl: './menu-prf.component.html',
  styleUrls: ['./menu-prf.component.css']
})
export class MenuPrfComponent implements OnInit {

  constructor( private autService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }


  salir() {
    this.autService.logOut();
    this.router.navigateByUrl('/home');
  }

}
