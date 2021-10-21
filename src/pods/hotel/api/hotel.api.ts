import { Hotel } from './hotel.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockHotelCollection } from './hotel.mock-data';
import { hot } from 'react-hot-loader';
import Axios from 'axios';

const hotelListUrl = '/api/hotels';
const cityListUrl = '/api/cities';

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
};
