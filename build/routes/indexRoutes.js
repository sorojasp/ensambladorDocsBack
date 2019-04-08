"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //se está importando el método Router desde express
const pdfPazSalvoContrtoCesion_controllers_1 = require("../controllers/pdfPazSalvoContrtoCesion.controllers");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/hola', (req, res) => {
            res.send('hola');
        });
        this.router.get('/usuarios', (req, res) => {
            res.send('usos');
        });
        //this.router.get('/abogados',indexControllers.cliente)
        this.router.post('/generaPdf', pdfPazSalvoContrtoCesion_controllers_1.PdfPazCesion.generarPdf);
        this.router.get('/descargaPdf', pdfPazSalvoContrtoCesion_controllers_1.PdfPazCesion.descargarPdf);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
