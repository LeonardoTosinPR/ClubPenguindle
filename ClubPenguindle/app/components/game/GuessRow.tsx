import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { GuessResult } from "@/types";
import FeedbackBox from "./FeedbackBox";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { metrics } from "@/theme/metrics";
import { LocalImages } from "@/assets"; // <-- IMPORTA O MAPA DE IMAGENS

// Função para formatar a lista de personagens
const formatChars = (chars: string[]) => {
  if (chars.length === 0) return "Nenhum";
  if (chars.length > 2) return `${chars[0]}, ${chars[1]}, ...`;
  return chars.join(", ");
};

const GuessRow = ({ result }: { result: GuessResult }) => {
  const { guess, feedback } = result;

  // --- A LÓGICA ---
  // 1. Pega o 'id' do palpite (ex: 31)
  // 2. Procura esse 'id' no mapa LocalImages
  // 3. O mapa retorna o 'require('./images/locais/31.jpg')'
  const localImageSource = LocalImages[guess.id];

  return (
    <View style={styles.container}>
      {/* --- CABEÇALHO COM IMAGEM --- */}
      <View style={styles.header}>
        <Image
          source={localImageSource} // <-- USA A IMAGEM LOCAL
          style={styles.locationImage}
        />
        <Text style={styles.guessName}>{guess.nome}</Text>
      </View>

      {/* Grade de Propriedades (Linha 1) */}
      <View style={styles.grid}>
        <FeedbackBox
          label="Região"
          value={guess.regiao}
          status={feedback.regiao}
        />
        <FeedbackBox label="Tipo" value={guess.tipo} status={feedback.tipo} />
        <FeedbackBox
          label="MiniGame"
          value={guess.temMiniGame ? "Sim" : "Não"}
          status={feedback.temMiniGame}
        />
      </View>

      {/* Grade de Propriedades (Linha 2) */}
      <View style={styles.grid}>
        <FeedbackBox
          label="Personagens"
          value={formatChars(guess.personagensAssociados)}
          status={feedback.personagens}
        />
        <FeedbackBox
          label="Ano"
          value={String(guess.anoLancamento)}
          status={feedback.ano}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: metrics.radiusMd,
    padding: metrics.sm,
    marginBottom: metrics.sm,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: metrics.xs,
  },
  locationImage: {
    width: 40,
    height: 40,
    borderRadius: metrics.radiusSm,
    marginRight: metrics.sm,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  guessName: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
    color: colors.textLight,
  },
  grid: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default GuessRow;
