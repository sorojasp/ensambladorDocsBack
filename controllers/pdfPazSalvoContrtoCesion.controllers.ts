// Modulos
import path from 'path';

//Conexion a la DB
import database from '../database/database';

//Models
import { Request, Response } from 'express';

//Funcionalidades

import GenerarPdf from '../funcionalidades/generarPdf/generatePdf';

//Definicion del Documento PDF
import DocDefinition from '../funcionalidades/generarPdf/DocDefinition';

//importa datos para generar el Pdf 

import {indexControllers} from '../controllers/indexControllers'

class pdfPazCesion {
    

    async generarPdf(req: Request, res: Response) {

     const pdf = async (datosAbogado: any) => {
        try {
          const docDefinition = new DocDefinition(datosAbogado);
         
          await new GenerarPdf(docDefinition.getDoc, docDefinition.getAbogado);
  
        } 
        
        catch (e) {
          console.log(e, 'err')
        }
        
  
      }
      const dataBaseAbogado =  await indexControllers.cliente(req,res);

      console.log(`datos abogado:${dataBaseAbogado.nombre_apellido}`)
     
      
      await pdf(dataBaseAbogado)

      
      

    }

  public async descargarPdf(req: Request, res: Response) {
      
 
      try {
  
        //*** */const identificacion = req.params.identificacion;
  
        // const personaResult: Persona[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${identificacion}`);
  
        // const persona: Persona = personaResult[0];
  
        res.status(200).download(path.join(__dirname, `../front/Demanda.pdf`));
  
      }
      catch (err) {
  
        console.log('Error al descargar el PDF para descargar\n', err);
  
        res.status(500).json({
          ok: false,
          err: 'Error al descargar el PDF para descargar',
          errMessge: err
        });
  
      }
  
  
    }

}

    export const PdfPazCesion = new pdfPazCesion;

   







