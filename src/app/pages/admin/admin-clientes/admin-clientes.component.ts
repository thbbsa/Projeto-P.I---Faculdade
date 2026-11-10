
import { Component, inject, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../model/cliente';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-clientes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin-clientes.component.html',
  styleUrl: './admin-clientes.component.css'
})
export class AdminClientesComponent implements OnInit {

  listaClientes: Cliente[] = [];

  private service = inject(ClienteService);

  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.service.listar().subscribe({
      next: (clientes) => {
        this.listaClientes = clientes;
      },
      error: (erro) => {
        console.error('Erro ao listar clientes:', erro);
      }
    });
  }

  excluir(id: number): void {
    if (confirm('Deseja realmente excluir este cliente?')) {

      this.service.excluir(id.toString()).subscribe({
        next: () => {
          alert('Cliente excluído com sucesso!');
          this.carregarClientes();
        },
        error: (erro) => {
          console.error('Erro ao excluir cliente:', erro);
          alert('Erro ao excluir cliente.');
        }
      });

    }
  }

  editar(id: number): void {
    console.log('Editar cliente:', id);
  }
}
