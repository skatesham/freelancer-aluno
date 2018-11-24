import { Usuario } from './usuario';
import { Pedido } from './pedido';

export class Proposta {

    static count:number = 0;

    id:number;
    usuario: Usuario;
    descricao:string;
    pedido: Pedido
    titulo:string;
    aberto: boolean;
    aceita:boolean;
    avaliado: boolean;

    constructor(usuario: Usuario, pedido:Pedido, titulo:string, descricao:string, ){
        this.id = Proposta.count;
        this.usuario = usuario;
        this.pedido = pedido;
        this.titulo = titulo;
        this.descricao = descricao;
        this.aberto = true;
        this.aceita = false;
        this.avaliado = false;
        Proposta.count++;
    }
}
