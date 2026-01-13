import { Location } from "../types";
import locaisData from "../data/locais.json";

/**
 * Busca a lista completa de todos os locais.
 */
export const getAllMapLocations = async (): Promise<Location[]> => {
  return locaisData.map((local) => ({
    ...local,
    imageUrl: `/images/locais/${local.id}.png`,
  }));
};

/**
 * Busca um local aleatório para o desafio do dia.
 */
export const getDailyMapChallenge = async (): Promise<Location> => {
  const randomIndex = Math.floor(Math.random() * locaisData.length);
  const selectedLocal = locaisData[randomIndex];
  return {
    ...selectedLocal,
    imageUrl: `/images/locais/${selectedLocal.id}.png`,
  };
};
