import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { commonStyles } from "@/theme/commonStyles";
import { styles } from "./styles"; // Importa estilos locais

export default function PersonagemScreen() {
  return (
    <SafeAreaView style={commonStyles.screenContainer}>
      <View style={commonStyles.contentContainer}>
        <Text style={commonStyles.screenTitle}>Personaguindle</Text>

        <Text style={commonStyles.bodyText}>
          Um novo modo de jogo para adivinhar o personagem do dia.
        </Text>

        <View style={styles.comingSoonBox}>
          <Text style={styles.comingSoonText}>EM BREVE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
