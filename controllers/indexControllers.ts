import {Request,Response} from  'express';
import {Abogado} from '../models/index.models';
import {PdfPazCesion} from '../controllers/pdfPazSalvoContrtoCesion.controllers';





class IndexControllers{
    datosAbogado:any
       public  async cliente  (req: Request, res: Response, cedula: number){
        //res.send('nueva ruta desde el controlador');
        
         const resultado= await Abogado.consulta(cedula);
         console.log(resultado)
         //res.status(200).send(resultado[0])
         return (resultado[0])    
    }

}


export const indexControllers = new IndexControllers;
