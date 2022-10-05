import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent  {

  @Input() texto !: string;
  @Input() id !: number;

  constructor() { }

  ngOnInit(): void {
    this.texto = 'carrera';
  }

}
