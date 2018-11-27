import { Usuario } from "./usuario";
import { Tag } from "./tag";
import { Proposta } from "./proposta";

export class Pedido {
    
    static count:number = 0;

    id: number;
    usuario: Usuario;
    titulo: string;
    disciplina: string;
    descricao: string;
    propostas: Proposta[];
    proposta: Proposta;
    tags: Tag[];
    aberto: boolean;
    avaliado:boolean;

    constructor(usuario:Usuario, titulo:string, disciplina:string, descricao:string, tags: Tag[]){
        
        this.id = Pedido.count;
        this.usuario = usuario;
        this.titulo = titulo;
        this.disciplina = disciplina;
        this.descricao = descricao;
        this.tags = tags;
        this.propostas = [];
        this.aberto = true;
        this.avaliado = false;
        this.proposta = null;
        Pedido.count++;
    }

}
