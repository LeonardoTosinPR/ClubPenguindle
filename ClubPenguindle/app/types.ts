/**
 * Define como é um objeto de Local (vindo da API)
 */
export interface Location {
  imageUrl: string | undefined;
  id: number;
  nome: string;
  regiao: string;
  tipo: string;
  temMiniGame: boolean;
  personagensAssociados: string[];
  anoLancamento: number;
  // O campo 'imageUrl' foi REMOVIDO
}

/**
 * Define os status possíveis para cada palpite
 */
export type GuessStatus =
  | "correct"
  | "partial"
  | "incorrect"
  | "higher"
  | "lower";

/**
 * Define o objeto de feedback para cada palpite
 */
export interface Feedback {
  regiao: GuessStatus;
  tipo: GuessStatus;
  temMiniGame: GuessStatus;
  personagens: GuessStatus;
  ano: GuessStatus;
}

/**
 * O objeto completo que será salvo no histórico de palpites
 */
export interface GuessResult {
  guess: Location; // O local que o usuário palpitou
  feedback: Feedback; // O feedback para esse palpite
}
