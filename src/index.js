
/*para importar módulos se usa la palabra reservada import, y luego entre {} se coloca
    la palabra o funcion a utilizar y en from se coloca la ruta del componente.
*/

//comando para la configuracion de webpack.
//npm i -D html-loader html-webpack-plugin
 
import { saludar } from './js/componentes.js';
import './styles.css';

const nombre= 'Alexander!!'

saludar(nombre);