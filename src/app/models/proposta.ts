import { Usuario } from './usuario';
import { Pedido } from './pedido';

export class Proposta {

    static count:number = 0;

    id:number;
    usuario: Usuario;
    descricao:string;
    aberto: boolean;

    constructor(usuario: Usuario, pedido:Pedido, descricao:string, ){
        this.id = Proposta.count;
        this.usuario = usuario;
        this.descricao = descricao;
        this.aberto = true;

        Proposta.count++;
    }
}
