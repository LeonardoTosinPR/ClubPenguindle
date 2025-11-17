import { StyleSheet, Platform, StatusBar } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { metrics } from "@/theme/metrics";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  webContainer: {
    flex: 1,
    width: "100%",
    maxWidth: metrics.webMaxWidth,
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    padding: metrics.sm,
    alignItems: "center",
  },
  title: {
    fontSize: fonts.size.xxl,
    fontWeight: fonts.weight.bold,
    color: colors.textLight,
    marginVertical: metrics.md,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  winText: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
    color: colors.correct,
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: metrics.sm,
    borderRadius: metrics.radiusSm,
    marginVertical: metrics.md,
  },
  pickerContainer: {
    width: "90%",
    marginBottom: metrics.sm,
  },
  guessList: {
    width: "100%",
    marginTop: metrics.md,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.overlay,
  },
  // --- AVISO ADICIONADO ---
  disclaimerText: {
    fontSize: fonts.size.xs,
    color: colors.textLight,
    textAlign: "center",
    opacity: 0.7,
    marginTop: metrics.sm,
  },
});

// --- ESTILOS DO PICKER ATUALIZADOS ---
export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: fonts.size.md,
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundLight,
    borderWidth: 2,
    borderColor: colors.primaryDark,
    borderRadius: metrics.radiusLg, // Mais arredondado
    color: colors.text,
    marginBottom: metrics.sm,
    fontWeight: fonts.weight.bold,
  },
  inputAndroid: {
    fontSize: fonts.size.md,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundLight,
    borderWidth: 2,
    borderColor: colors.primaryDark,
    borderRadius: metrics.radiusLg, // Mais arredondado
    color: colors.text,
    marginBottom: metrics.sm,
    fontWeight: fonts.weight.bold,
  },
  placeholder: {
    color: colors.textSecondary,
    fontWeight: fonts.weight.regular,
  },
  // Adiciona um ícone de "dropdown"
  iconContainer: {
    top: Platform.OS === "ios" ? 12 : 10,
    right: 15,
  },
});
