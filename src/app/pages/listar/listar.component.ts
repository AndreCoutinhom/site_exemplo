import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../core/types/types';
import { ClientesService } from '../../core/services/clientes.service';

@Component({
  selector: 'app-listar',
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  
  listaClientes: Cliente[] = [];
  constructor(private service: ClientesService) {}

  
  ngOnInit(): void {
    this.service.listar().subscribe((clientes) => {
      this.listaClientes = clientes;
    });
  }

}
