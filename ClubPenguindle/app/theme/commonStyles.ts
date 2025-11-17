import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { metrics } from "./metrics";

/**
 * Estilos Globais Reutilizáveis
 */
export const commonStyles = StyleSheet.create({
  /** Contêiner de tela padrão (fundo claro) */
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center", // Centraliza conteúdo na web
  },

  /** Contêiner para o conteúdo dentro da tela */
  contentContainer: {
    flex: 1,
    width: "100%",
    maxWidth: metrics.webMaxWidth, // Limita a largura na web
    padding: metrics.md,
  },

  /** Título principal da tela */
  screenTitle: {
    fontSize: fonts.size.xl,
    fontWeight: fonts.weight.bold,
    color: colors.text,
    marginBottom: metrics.lg,
  },

  /** Texto padrão do app */
  bodyText: {
    fontSize: fonts.size.md,
    color: colors.textSecondary,
    lineHeight: 22,
  },
});
