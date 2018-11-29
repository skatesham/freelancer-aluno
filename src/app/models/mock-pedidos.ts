import { Pedido } from "./pedido";
import { usuarios } from "./mock-usuarios";
import { tags } from "./mock-tags";
import { propostas } from "./mock-propostas";

export let pedidos: Pedido[] = new Array<Pedido>();

let pedido0 = new Pedido(usuarios[1], "Auxilio com API javascript", "Interação Humano Computador", "Estou com precisando de aulas para desenvolver um aplicação com javascript", [tags[2]]);
let pedido1 = new Pedido(usuarios[2], "Ajuda com Angular", "Programação Scripts", "Preciso de ajuda com criação de um sistema Angular", [tags[1]]);
let pedido2 = new Pedido(usuarios[2], "Criação app Ionic", "Programação Scripts", "Preciso auxilio desenvolvimento Ionic", [tags[0]]);

pedidos.push(pedido0);
pedidos.push(pedido1);
pedidos.push(pedido2);

