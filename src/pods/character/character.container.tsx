import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from './api';
import { Character, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();


  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    }
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return <CharacterComponent character={character} onSave={handleSave} />;
};
