import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  constructor() { }

  vamos_rir: string;

  ngOnInit(): void {
  }

  pesquisar(form) {
    location.href = `/resultado/${form.value.vamos_rir}`;
  }

}
