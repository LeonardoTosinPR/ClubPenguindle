import React from "react";
import { View, Text, Button, Linking, SafeAreaView } from "react-native";
import { commonStyles } from "../../theme/commonStyles"; // Importa estilos comuns
import { styles } from "./styles"; // Importa estilos locais
import { colors } from "../../theme/colors"; // Importa cores para o botão

const GITHUB_URL = "https://github.com/LeonardoTosinPR/ClubPenguindle";

export default function SobreScreen() {
  const handlePress = () => {
    Linking.openURL(GITHUB_URL);
  };

  return (
    <SafeAreaView style={commonStyles.screenContainer}>
      <View style={commonStyles.contentContainer}>
        <Text style={commonStyles.screenTitle}>🐧 Sobre o Club Penguindle</Text>

        <Text style={commonStyles.bodyText}>
          Este é um projeto de fã feito com React Native (Expo) e PHP, inspirado
          no Wordle e no universo do Club Penguin.
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Ver o Código no GitHub"
            onPress={handlePress}
            color={colors.primary}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
