"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.configApp();
        this.router();
    }
    configApp() {
        this.app.use('/', express_1.default.static(path_1.default.join(__dirname, 'public')));
        this.app.use(morgan_1.default('dev')); //Registra las peticiones que llegan al server
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((req, res, next) => {
            console.log(`urlRequerida:${req.url} - métodoRequerido:${req.method}`);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.app.set('port', process.env.PORT || '3000');
    }
    router() {
        this.app.use(indexRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`server working in port  ${this.app.get('port')}`);
        });
    }
    middlewares() {
        /*
          Este metodo se ejecuta en el constructor luego de las configuracione generales del server (Ej: port) y antes de las rutas, con el objetivo de registrar, procesar Cabeceras entre otras funcionalidades.
        */
    }
}
exports.Server = Server;
;
const server = new Server();
server.middlewares();
server.start();
