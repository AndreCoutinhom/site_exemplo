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

  //Esse método serve para excluir um cliente da lista e atualizar a tela automaticamente, sem recarregar a página.
  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        // Remove o cliente com o id correspondente da lista
        this.listaClientes = this.listaClientes.filter(cliente => cliente.id !== id);
      });
    }
  }

}
