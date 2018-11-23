import { Proposta } from "./proposta";
import { usuarios } from "./mock-usuarios";
import { pedidos } from "./mock-pedidos";

export let propostas: Proposta[] = new Array<Proposta>();

let proposta1 = new Proposta(usuarios[1], pedidos[0], "Posso te dar uma aula, no horários da tarde");
let proposta2 = new Proposta(usuarios[0], pedidos[1], "Posso te ensinar isso, mas preciso de R$ 5,00 reais a hora");
let proposta3 = new Proposta(usuarios[2], pedidos[2], "Cara eu sei lidar com ele, eu te ajudo");

propostas.push(proposta1);
propostas.push(proposta2);
propostas.push(proposta3);
