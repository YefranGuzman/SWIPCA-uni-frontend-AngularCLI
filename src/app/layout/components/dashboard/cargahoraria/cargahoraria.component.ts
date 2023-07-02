import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../../servicios/api-service.service';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cargahoraria',
  templateUrl: './cargahoraria.component.html',
  styleUrls: ['./cargahoraria.component.css'],
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatListModule]
})

export class CargahorariaComponent implements OnInit {

  constructor(private api:ApiServiceService, private router:Router){}
  ngOnInit(): void {

  }
}
