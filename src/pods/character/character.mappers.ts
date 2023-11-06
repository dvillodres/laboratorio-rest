import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  location: character.location.name,
  gender: character.gender,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    location: {
      name: character.location,
      url: ''
    },
    gender: character.gender,
  } as unknown) as apiModel.Character);
