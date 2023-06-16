import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../../servicios/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargahoraria',
  templateUrl: './cargahoraria.component.html',
  styleUrls: ['./cargahoraria.component.css']
})

export class CargahorariaComponent implements OnInit {

  constructor(private api:ApiServiceService, private router:Router){}
  ngOnInit(): void {

  }
}
