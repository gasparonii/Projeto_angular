import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-venda-passagens',
  templateUrl: './venda-passagens.component.html',
  styleUrls: ['./venda-passagens.component.css']
})
export class VendaPassagensComponent implements OnInit {
  @Input() titulo;
  @Input() col;
  @Input() tipo;

  constructor() { }

  ngOnInit() {
  }

}