"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modulos
const path_1 = __importDefault(require("path"));
class descargaPdf {
    descargarPdf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //*** */const identificacion = req.params.identificacion;
                // const personaResult: Persona[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${identificacion}`);
                // const persona: Persona = personaResult[0];
                res.download(path_1.default.join(__dirname, `../front/Demanda.pdf`));
            }
            catch (err) {
                console.log('Error al descargar el PDF para descargar\n', err);
                res.status(500).json({
                    ok: false,
                    err: 'Error al descargar el PDF para descargar',
                    errMessge: err
                });
            }
        });
    }
}
exports.DescargaPdf = new descargaPdf;
