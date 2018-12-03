export class UsuarioModel {

    // ID
    _id: number;

    nick: string;
    email: string;
    senha: string;
    tel: string;
    imagem:string;

    pedidos_id: string = '';
    propostas_id: string = '';

    github:string;
    linkedin:string;
    facebook:string;
    instagram:string;

    constructor(nick:string, email:string, senha:string, tel:string, github:string = '', linkedin:string = '', facebook:string = '', instagram:string = ''){
        this.nick = nick;
        this.email = email;
        this.senha = senha;
        this.tel = tel;
        this.github = github;
        this.linkedin = linkedin;
        this.facebook = facebook;
        this.instagram = instagram;

    }

}
