import { Usuario } from "./usuario";

export let usuarios : Usuario[] = new Array<Usuario>();

let admin = new Usuario('admin','admin@admin.com', '123', '1299999999');
let sham =  new Usuario('shazan','sham@gmail.com', '123', '1296657941');
let franco = new Usuario('franco','francojm31@gmail.com', '123', '12982161650');
let lucas = new Usuario('lucas', 'lucao_soares@hotmail.com',"123","12988012055");


usuarios.push(admin);
usuarios.push(sham);
usuarios.push(franco);
usuarios.push(lucas);
