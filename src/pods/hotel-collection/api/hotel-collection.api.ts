import Axios from 'axios';
import { HotelEntityApi } from './hotel-collection.api-model';
import { mockHotelCollection } from './hotel-collection.mock-data';

let hotelCollection = [...mockHotelCollection];
const url = '/api/hotels';

export const getHotelCollection = async (): Promise<HotelEntityApi[]> => {
  // return hotelCollection;
  const response  = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const deleteHotel = async (id: string): Promise<boolean> => {
  // base
  // hotelCollection = hotelCollection.filter((h) => h.id !== id);
  // return true;
  
  // version primera
  // const response = await fetch(`${url}/${id}` ,{method: 'DELETE' });
  // return response.ok;
  
  // version con axios
  await Axios.delete(`${url}/${id}`);
  return true;

};
