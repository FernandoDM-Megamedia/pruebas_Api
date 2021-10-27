import { Hotel } from './hotel.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockHotelCollection } from './hotel.mock-data';
import { hot } from 'react-hot-loader';
import Axios from 'axios';

const hotelListUrl = '/api/hotels';
const cityListUrl = '/api/cities';

/* TODO .-  antonio, aqui estan las dudas en el bloque saveHotel

en el video   1.8 Demos - Demo Put
Vamos a ver como modificar un hotel interactuando con una API Rest usando Fetch y Axios.

Vídeo 1.7 - Demo Put
1.7 - Demo Put

se comenta este tema

  * el primer codigo comentado cunado se ejecuta da error
  * el segundo bloque da erro no retorna a la pagina anterior pero si modifica
  *
*/

export const getHotel = async (id: string): Promise<Hotel> => {
  // return mockHotelCollection.find((h) => h.id === id);
  const response  = await fetch(`${hotelListUrl}/${id}`);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const getCities = async (): Promise<Lookup[]> => {
  // return mockCities;
  const response  = await fetch(cityListUrl);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
  // return true;

  // aqui da error y no lo hace
  // if (hotel.id) {
  //   //put - una actualizacion
  //   await fetch(`${hotelListUrl}/${hotel.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'applications/json',
  //     },
  //     body: JSON.stringify(hotel),
  //   })
  // } else {
  //   // post - una insercion
  // }

  // da error pero si lo hace "" pero no vuelve a la pagina principal
  // con AXIOS
  if (hotel.id) {
    // put
    await Axios.put<Hotel>(`${hotelListUrl}/${hotel.id}`, hotel);
  } else {
    // post
  }
  return true
};
