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
const database_1 = __importDefault(require("../database/database"));
class abogado {
    consulta(cedula) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dataAbogado = undefined;
            this.dataAbogado = yield database_1.default.query(`SELECT *FROM db_abogados WHERE cedula=${cedula}`);
            if (this.dataAbogado == undefined) {
                throw new Error("you was problem");
            }
            else {
                return (this.dataAbogado);
            }
        });
    }
}
exports.Abogado = new abogado;
