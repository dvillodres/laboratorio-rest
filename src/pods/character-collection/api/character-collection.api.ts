import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if (!response.ok) {
      throw new Error('No se pudo obtener la colección de personajes');
    }
    const data = await response.json();
    const characterCollection: CharacterEntityApi[] = data.results;
    return characterCollection;
  } catch (error) {
    console.error('Error al obtener la colección de personajes', error);
    return [];
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
