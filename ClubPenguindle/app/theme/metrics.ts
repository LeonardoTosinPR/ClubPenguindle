import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

/**
 * Métricas de Layout (Espaçamento, Bordas, etc.)
 */
export const metrics = {
  // Espaçamentos
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,

  // Raio da Borda
  radiusSm: 4,
  radiusMd: 8,
  radiusLg: 16,

  // Tamanhos de Tela
  screenWidth: width,
  screenHeight: height,

  // Tamanho padrão do ícone da aba
  tabIconSize: 24,

  // Largura máxima para conteúdo na web
  webMaxWidth: 700,
};
