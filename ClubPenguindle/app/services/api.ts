import { Location } from "../types";

// !! IMPORTANTE !!
// Verifique se esta URL está correta (http://localhost/api/index.php)
const API_URL = "http://localhost/api/index.php";

/**
 * Busca a lista completa de todos os locais.
 */
export const getAllMapLocations = async (): Promise<Location[]> => {
  // ATUALIZADO: action=allMaps
  const response = await fetch(`${API_URL}?action=allMaps`);
  if (!response.ok) {
    throw new Error("Falha ao buscar locais.");
  }
  return response.json();
};

/**
 * Busca o local (desafio) do dia.
 */
export const getDailyMapChallenge = async (): Promise<Location> => {
  // ATUALIZADO: action=dailyMap
  const response = await fetch(`${API_URL}?action=dailyMap`);
  if (!response.ok) {
    throw new Error("Falha ao buscar desafio do dia.");
  }
  return response.json();
};
