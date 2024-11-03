import { NextApiRequest, NextApiResponse } from 'next';
import { CarroTO } from '../../../types/carro';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CarroTO | { message: string }>
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const apiResponse = await fetch(`http://localhost:8080/carros/${id}`);
       if (apiResponse.ok) {
         const carroData: CarroTO = await apiResponse.json();
         res.status(200).json(carroData);
       } else if (apiResponse.status == 404) {
            res.status(404).json({ message: "Carro não encontrado." }); 
       }
       else {
           const error = await apiResponse.json() //Handle error in case the Java api returns error messages.
            res.status(apiResponse.status).json({message: error.message || `Erro na requisição para a API Java. Status: ${apiResponse.status}` })
        }




    } catch (error) {
      console.error(`Erro buscando carro ${id}:`, error);
       res.status(500).json({ message: "Erro buscando carro." });

    }


  } else {

      res.status(405).end(); // Method Not Allowed

    }

}