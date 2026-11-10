
import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../model/cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  // Objeto para armazenar os dados do formulário
  cliente: Cliente = {} as Cliente;

  private service = inject(ClienteService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  confirmarSenha: string = '';

  clienteId: string | null = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {

    // Se houver ID, busca o cliente para edição
    if (this.clienteId) {
      this.service.buscarPorId(this.clienteId).subscribe({
        next: (cliente: Cliente) => {
          this.cliente = cliente;
        },
        error: () => alert('Cliente não encontrado.')
      });
    }
  }

  salvar(): void {

    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    if (this.clienteId) {

      this.service.editar(this.cliente).subscribe({
        next: (cliente: Cliente) => {
          this.cliente = cliente;
          alert('Cliente alterado com sucesso!');
          this.router.navigate(['/admin-clientes-listar']);
        },
        error: () => alert('Erro ao alterar o cliente.')
      });

    } else {

      this.service.incluir(this.cliente).subscribe({
        next: (cliente: Cliente) => {
          this.cliente = cliente;
          alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);
          this.router.navigate(['/admin-clientes-listar']);
        },
        error: () => alert('Erro ao cadastrar o cliente.')
      });

    }
  }
}
