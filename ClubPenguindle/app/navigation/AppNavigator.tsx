import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

// Importa as telas
import MapaScreen from "@/screens/MapaScreen";
import PersonagemScreen from "@/screens/PersonagemScreen/index";
import SobreScreen from "@/screens/SobreScreen/index";

const Tab = createBottomTabNavigator();

// --- NOVO BOTÃO CUSTOMIZADO ---
// Este componente substitui o botão de aba padrão
const CustomTabButton = ({ children, onPress, accessibilityState }: any) => {
  // --- CORREÇÃO AQUI ---
  // Adiciona '?' para evitar o erro 'cannot read properties of undefined'
  const isSelected = accessibilityState?.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabButton,
        isSelected ? styles.tabButtonSelected : null, // Estilo de "selecionado"
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // --- ESTILO DO MENU ---
        tabBarStyle: {
          backgroundColor: colors.primary, // Fundo azul CP
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 5,
        },
        tabBarLabel: ({ focused, children }) => (
          <Text
            style={{
              color: focused ? colors.textLight : "rgba(255,255,255,0.6)",
              fontSize: fonts.size.xs,
            }}
          >
            {children}
          </Text>
        ),
        tabBarIcon: ({ focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "help-circle";
          let color = focused ? colors.textLight : "rgba(255,255,255,0.6)";

          if (route.name === "Mapa") iconName = focused ? "map" : "map-outline";
          else if (route.name === "Personagem")
            iconName = focused ? "person" : "person-outline";
          else if (route.name === "Sobre")
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";

          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
    >
      {/* Nossas três telas, agora com o botão customizado */}
      <Tab.Screen
        name="Mapa"
        component={MapaScreen}
        options={{ tabBarButton: CustomTabButton }}
      />
      <Tab.Screen
        name="Personagem"
        component={PersonagemScreen}
        options={{ tabBarButton: CustomTabButton }}
      />
      <Tab.Screen
        name="Sobre"
        component={SobreScreen}
        options={{ tabBarButton: CustomTabButton }}
      />
    </Tab.Navigator>
  );
}

// --- ESTILOS DO BOTÃO CUSTOMIZADO ---
const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  tabButtonSelected: {
    backgroundColor: "rgba(0,0,0,0.2)", // Um leve escurecimento ao selecionar
  },
});
