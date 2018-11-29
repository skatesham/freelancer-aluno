import { Pedido } from "./pedido";
import { Proposta } from "./proposta";

export class Usuario {

    static count:number = 0;
    static angularImg:string = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==";
    
    id: number;
    nick: string;
    email: string;
    senha: string;
    tel: string;
    imagem:string;
    pedidos: Array<Pedido>;
    propostas: Array<Proposta>;

    github:string;
    linkedin:string;
    facebook:string;
    instagram:string;
    

    constructor(nick: string, email: string, senha: string, tel: string, imagem?:string){
        this.id = Usuario.count;
        this.nick = nick;
        this.email = email;
        this.senha = senha;
        this.tel = tel;
        this.pedidos = [];
        this.propostas = [];
        this.imagem = Usuario.angularImg;
        if(imagem){
            this.imagem = imagem;
        }

        //media social
        this.github = '';
        this.linkedin ='';
        this.facebook = '';
        this.instagram = '';

        Usuario.count++;
    }

    addPedido(pedido: Pedido){
        this.pedidos.push(pedido);
    }

    addProposta(proposta: Proposta){
        this.propostas.push(proposta);
    }
}
