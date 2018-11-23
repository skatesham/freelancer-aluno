import { Pedido } from "./pedido";
import { Proposta } from "./proposta";

export class Usuario {

    static count:number = 0;
    
    id: number;
    nick: string;
    email: string;
    senha: string;
    tel: number;
    pedidos: Array<Pedido>;
    propostas: Array<Proposta>;

    constructor(nick: string, email: string, senha: string, tel: number){
        this.id = Usuario.count;
        this.nick = nick;
        this.email = email;
        this.senha = senha;
        this.tel = tel;
        this.pedidos = [];
        this.propostas = [];

        Usuario.count++;
    }

    addPedido(pedido: Pedido){
        this.pedidos.push(pedido);
    }

    addProposta(proposta: Proposta){
        this.propostas.push(proposta);
    }
}
