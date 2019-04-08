import database from "../database/database";
import { MysqlError } from "mysql";
import {PdfPazCesion} from "../controllers/pdfPazSalvoContrtoCesion.controllers";


 class abogado {

    dataAbogado: any;
    

      public async consulta (cedula: number) {
          this.dataAbogado = undefined; 
          this.dataAbogado =  await database.query(`SELECT *FROM db_abogados WHERE cedula=${cedula}`);
          if(this.dataAbogado== undefined){
            throw new Error("you was problem")
          }else{
              
              return(this.dataAbogado)
          }
        
          
    } 
}


export const Abogado = new abogado;



