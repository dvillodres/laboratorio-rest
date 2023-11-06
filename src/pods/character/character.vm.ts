export interface Character {
  id: number | null;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: string;
}

export const createEmptyCharacter = (): Character => ({
  id: null,
  name: '',
  status: '',
  species: '',
  gender: '',
  location: '',
});
