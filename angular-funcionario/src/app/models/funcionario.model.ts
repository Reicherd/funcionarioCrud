import { Genero } from "../enumerators/genero.enum";
import { Endereco } from "./endereco.model";

export class Funcionario {
    id?: number;
    matricula?: string;
    nome?: string;
    email?: string;
    dataNascimento?: Date;
    telefone?: string;
    genero?: Genero;
    endereco?: Endereco;
}
