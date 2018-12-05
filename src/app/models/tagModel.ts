export class TagModel {

    _id: string;
    nome: string;
    Created_date:string;
    constructor(nome: string){

        nome = nome.trim();
        nome = nome.toLowerCase();
        nome.replace(/[^a-zA-Z ]/g, "");
        
        this.nome = nome;
    }
    
}
