import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    if (!response.ok) {
      throw new Error(`Error de red: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data as Character;
  } catch (error) {
    throw new Error(`Error al obtener el personaje: ${error}`);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
