import { Usuario } from "./usuario";

export let usuarios : Usuario[] = new Array<Usuario>();

var admin = new Usuario('admin','admin@admin.com', '123', 1299999999);
var sham =  new Usuario('shazan','sham.vinicius@gmail.com', '123', 1296657941);
var franco = new Usuario('franco','francojm31@gmail.com', '123', 12982161650);


usuarios.push(admin);
usuarios.push(sham);
usuarios.push(franco);
