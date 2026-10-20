export interface Cliente {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    dataNascimento: string;
    email: string;
    senha?: string;
}
