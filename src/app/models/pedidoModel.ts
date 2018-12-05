import { UsuarioModel } from "./usuarioModel";
import { TagModel } from "./tagModel";

export class PedidoModel {

    _id: number;
    usuario_id: string;
    usuario: UsuarioModel;
    titulo: string;
    disciplina: string;
    descricao: string;
    propostas_id: string[];
    proposta_id: string;
    tags: TagModel[];
    tagString:string;

    // analise
    aberto: boolean;
    avaliado:boolean;

    Created_date:string;

    // backup
    //propostas: string[];

    constructor(usuario_id:string, titulo:string, disciplina:string, descricao:string, tags: TagModel[], tagString:string = "", propostas_id:string[] =[]){
        
        this.usuario_id = usuario_id;
        this.titulo = titulo;
        this.disciplina = disciplina;
        this.descricao = descricao;
        this.tags = tags;
        this.propostas_id = propostas_id; 
        this.aberto = true;
        this.avaliado = false;
        this.proposta_id = null;
        this.tagString = tagString;

    }


}