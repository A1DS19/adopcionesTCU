import { PetsData } from './../actions/pets/petsInterfaces';
import { StoreState } from './../reducers/index';
import { useSelector } from 'react-redux';

export function usePetData(petId: number): PetsData | undefined {
  const petData = useSelector(({ pets }: StoreState) => {
    return pets?.petsData.find((pet: PetsData) => pet.id === petId);
  });
  return petData;
}
