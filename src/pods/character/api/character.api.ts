import { Character } from './character.api-model';

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await fetch(`http://localhost:3000/characters/${id}`);

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
  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  };
  console.log(`http://localhost:3000/characters/${character.id}`)
  try {
    const response = await fetch(`http://localhost:3000/characters/${character.id}`, requestOptions);

    if (response.ok) {
      return true;
    } else {
      throw new Error('Error');
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};
