import { NextApiRequest, NextApiResponse } from 'next';
import { CarroTO } from '../../../types/carro'; // Correct path to CarroTO


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      try {
         const novoCarro: CarroTO = req.body;  // Automatic type checking 

         // Now send this data to your Java API using fetch
         const apiResponse = await fetch('http://localhost:8080/carros', {  // Your Java API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
           body: JSON.stringify(novoCarro), 
         });



        if (apiResponse.ok) {

            const addedCarro = await apiResponse.json();
            res.status(201).json(addedCarro);  // send created carro back

        } else {

            const apiError = await apiResponse.json(); //handle error if the java api returns a body, such as bad request
             console.error("Error from java API", apiResponse.status, apiError); //log the error and what comes from java api
             res.status(apiResponse.status).json({message: apiError.message || `Erro ao adicionar veículo. Java api status: ${apiResponse.status}`})


         }


      } catch (error) {

         console.error('Error adding vehicle:', error);
         res.status(500).json({ message: 'Erro ao adicionar veículo.' });

       }

    } else {
       res.status(405).end(); // Method Not Allowed for other requests.
     }

}