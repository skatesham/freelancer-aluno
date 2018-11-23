import { Usuario } from "./usuario";

export class Pedido {
    
    static count:number = 0;

    id: number;
    usuario: Usuario;
    titulo: string;
    disciplina: string;
    descricao: string;
    aberto: boolean;

    constructor(usuario:Usuario, titulo:string, desciplina:string, descricao:string){
        
        this.id = Pedido.count;
        this.usuario = usuario;
        this.titulo = titulo;
        this.disciplina = this.disciplina;
        this.descricao = descricao;
        this.aberto = true;
        
        Pedido.count++;
    }

}
