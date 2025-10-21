// api/carapi.ts 파일 생성
import axios from "axios";
import { CarResponse, Car } from "../types";

export const getCars = async ():// 매개변수 없음 전체 가져올꺼니까, 특정 요소 가져올꺼면 id
  Promise<CarResponse[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`)

    return response.data._embedded.cars;
  }

export const deleteCar = async (link: string) : Promise<CarResponse[]> => {
  const response = await axios.delete(link);
  return response.data 
}

export const addCar = async (car: Car) : Promise<CarResponse> => {
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}