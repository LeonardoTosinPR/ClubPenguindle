import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GuessStatus } from "../../types";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { metrics } from "../../theme/metrics";

interface Props {
  status: GuessStatus;
  label: string; // Ex: "Região"
  value: string; // Ex: "Central"
}

/**
 * Este componente mostra uma propriedade (ex: "Região"),
 * seu valor (ex: "Central"), e a cor de feedback.
 */
const FeedbackBox = ({ status, label, value }: Props) => {
  const getBackgroundColor = () => {
    switch (status) {
      case "correct":
        return colors.correct;
      case "partial":
        return colors.partial;
      case "higher":
        return colors.higher;
      case "lower":
        return colors.lower;
      default:
        return colors.incorrect;
    }
  };

  // Verifica se deve mostrar o ícone de seta
  const isNumericStatus = status === "higher" || status === "lower";

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      {/* Rótulo (ex: "ANO") */}
      <Text style={styles.labelText}>{label}</Text>

      {/* Ícone (Seta para Cima ou Baixo) */}
      {isNumericStatus && (
        <Ionicons
          name={status === "higher" ? "arrow-up-circle" : "arrow-down-circle"}
          size={16}
          color={colors.textLight}
          style={styles.icon}
        />
      )}

      {/* Valor (ex: "2005") */}
      <Text style={styles.valueText} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Para dividir o espaço igualmente
    minWidth: 90,
    maxWidth: 120,
    height: 70,
    borderRadius: metrics.radiusSm,
    padding: metrics.xs,
    margin: metrics.xs,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  labelText: {
    fontSize: fonts.size.xs,
    fontWeight: fonts.weight.bold,
    color: colors.textLight,
    textTransform: "uppercase",
    opacity: 0.8,
  },
  valueText: {
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.bold,
    color: colors.textLight,
    textAlign: "center",
  },
  icon: {
    // Ícone aparece ao lado do valor, mas o texto é mais importante
  },
});

export default FeedbackBox;
