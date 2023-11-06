export interface Character {
  id: number | null;
  name: string;
  bestSentences: string;
  status: string;
  species: string;
  gender: string;
  location: string;
}

export const createEmptyCharacter = (): Character => ({
  id: null,
  bestSentences: '',
  name: '',
  status: '',
  species: '',
  gender: '',
  location: '',
});
