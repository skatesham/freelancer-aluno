import { Usuario } from "./usuario";
import { img_sham } from "./img-sham";

export let usuarios: Usuario[] = new Array<Usuario>();

let admin = new Usuario('admin', 'admin@admin.com', '123', '12999999999');
let sham = new Usuario('shazan', 'sham.vinicius@gmail.com', '123', '12996657941');
let franco = new Usuario('franco', 'francojm31@gmail.com', '123', '12982161650');
let lucas = new Usuario('lucas', 'lucao_soares@hotmail.com', "123", "12988012055");

// Imagem default Sham
sham.imagem = img_sham;

// Medias Sham
sham.github = "https://github.com/skatesham";
sham.facebook = "https://www.facebook.com/svfiorin";
sham.linkedin = "https://www.linkedin.com/in/shamfiorin/";
sham.instagram = "https://www.instagram.com/shamfiorin/?hl=pt-br";


usuarios.push(admin);
usuarios.push(sham);
usuarios.push(franco);
usuarios.push(lucas);
