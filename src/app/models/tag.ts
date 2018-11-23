export class Tag {

    static count:number = 0;

    id: number;
    nome: string;

    constructor(nome: string){

        nome = nome.trim();
        nome = nome.toLowerCase();

        this.id = Tag.count;
        this.nome = nome;

        Tag.count++;
    }
    
    getNome() : string{
        return this.nome;
    }

}
