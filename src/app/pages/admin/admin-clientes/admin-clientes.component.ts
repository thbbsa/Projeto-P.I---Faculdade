import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'app-admin-clientes',
  standalone: true,
  imports: [],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent implements OnInit{
  ngOnInit(): void {
    this.listaClientes = this.service.listar();
  }
  listaClientes:Cliente[] = [];

  // injeção de dependencias
  private service = inject(ClienteService)

  excluir(id:number) {

  }

  editar(id:number) {

  }
}
