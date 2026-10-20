import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

    listar(): Cliente[] {
    return [
      { id: 1, nome: "Ana", sobrenome: "Souza", cpf: "98765432100", dataNascimento: "1995-05-15", email: "ana@email.com" },
      { id: 2, nome: "Carlos", sobrenome: "Oliveira", cpf: "11122233344", dataNascimento: "1988-11-23", email: "carlos@email.com" },
      { id: 3, nome: "Laura", sobrenome: "Silva", cpf: "12345678910", dataNascimento: "2006-10-01", email: "laura@email.com" },
      { id: 4, nome: "Lucas", sobrenome: "Almeida", cpf: "55566677788", dataNascimento: "2001-02-28", email: "lucas@email.com" }
    ];
  }

}
