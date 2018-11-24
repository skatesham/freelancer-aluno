import { Pedido } from "./pedido";
import { usuarios } from "./mock-usuarios";
import { tags } from "./mock-tags";
import { propostas } from "./mock-propostas";

export let pedidos: Pedido[] = new Array<Pedido>();


let pedido1 = new Pedido(usuarios[2], "Ajuda com Angular", "Programação Scripts", "Preciso de ajuda com criação de um sistema Angular", [tags[1]]);
let pedido2 = new Pedido(usuarios[2], "Criação app Ionic", "Programação Scripts", "Preciso auxilio desenvolvimento Ionic", [tags[0]]);
let pedido3 = new Pedido(usuarios[1], "Ajuda com Giuliano", "Interação Humano Computador", "Giuliano está me matando com IHC", [tags[2]]);

pedidos.push(pedido1);
pedidos.push(pedido2);
pedidos.push(pedido3);
