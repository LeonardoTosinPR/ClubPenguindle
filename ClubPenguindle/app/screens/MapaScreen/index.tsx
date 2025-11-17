import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons"; // <-- IMPORTAR ÍCONES

import { Location, GuessResult, Feedback } from "@/types";
import { getAllMapLocations, getDailyMapChallenge } from "@/services/api";
import { Images } from "@/assets";
import { colors } from "@/theme/colors";
import { styles, pickerSelectStyles } from "./styles";
import GuessRow from "@/components/game/GuessRow";

// (A função compareLocations é a mesma que você já tem)
function compareLocations(guess: Location, answer: Location): Feedback {
  const feedback: Feedback = {
    regiao: "incorrect",
    tipo: "incorrect",
    temMiniGame: "incorrect",
    personagens: "incorrect",
    ano: "incorrect",
  };
  if (guess.regiao === answer.regiao) feedback.regiao = "correct";
  if (guess.tipo === answer.tipo) feedback.tipo = "correct";
  if (guess.temMiniGame === answer.temMiniGame)
    feedback.temMiniGame = "correct";
  if (guess.anoLancamento === answer.anoLancamento) {
    feedback.ano = "correct";
  } else if (guess.anoLancamento < answer.anoLancamento) {
    feedback.ano = "higher";
  } else {
    feedback.ano = "lower";
  }
  const guessChars = guess.personagensAssociados;
  const answerChars = answer.personagensAssociados;
  const guessIsEmpty = guessChars.length === 0;
  const answerIsEmpty = answerChars.length === 0;
  if (guessIsEmpty && answerIsEmpty) {
    feedback.personagens = "correct";
  } else if (guessIsEmpty || answerIsEmpty) {
    feedback.personagens = "incorrect";
  } else {
    const isExactMatch =
      guessChars.length === answerChars.length &&
      guessChars.every((char) => answerChars.includes(char));
    const hasPartialMatch = guessChars.some((char) =>
      answerChars.includes(char)
    );
    if (isExactMatch) feedback.personagens = "correct";
    else if (hasPartialMatch) feedback.personagens = "partial";
    else feedback.personagens = "incorrect";
  }
  return feedback;
}

// --- O Componente da Tela ---
export default function MapaScreen() {
  const [loading, setLoading] = useState(true);
  const [allLocations, setAllLocations] = useState<Location[]>([]);
  const [pickerOptions, setPickerOptions] = useState<
    { label: string; value: number }[]
  >([]);
  const [dailyAnswer, setDailyAnswer] = useState<Location | null>(null);
  const [selectedGuessId, setSelectedGuessId] = useState<number | string>("");
  const [isGameWon, setIsGameWon] = useState(false);
  const [guesses, setGuesses] = useState<GuessResult[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [locationsData, answerData] = await Promise.all([
          getAllMapLocations(),
          getDailyMapChallenge(),
        ]);

        setAllLocations(locationsData);
        setDailyAnswer(answerData);

        const options = locationsData.map((loc) => ({
          label: loc.nome,
          value: loc.id,
        }));
        setPickerOptions(options);
      } catch (error) {
        console.error("Erro ao carregar dados da API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleGuess = () => {
    if (!selectedGuessId || selectedGuessId === "" || !dailyAnswer || isGameWon)
      return;
    const guessObject = allLocations.find((loc) => loc.id === selectedGuessId);
    if (!guessObject) return;
    setPickerOptions((prevOptions) =>
      prevOptions.filter((opt) => opt.value !== selectedGuessId)
    );
    const feedback = compareLocations(guessObject, dailyAnswer);
    const result: GuessResult = {
      guess: guessObject,
      feedback: feedback,
    };
    setGuesses((prevGuesses) => [result, ...prevGuesses]);
    if (guessObject.id === dailyAnswer.id) {
      setIsGameWon(true);
    }
    setSelectedGuessId("");
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{ color: colors.textLight, marginTop: 10 }}>
          Carregando...
        </Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={Images.mapBackground}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.webContainer}>
          <View style={styles.overlay}>
            <Text style={styles.title}>🐧 Club Penguindle 🐧</Text>

            {isGameWon ? (
              <Text style={styles.winText}>
                Parabéns! A resposta era {dailyAnswer?.nome}.
              </Text>
            ) : (
              <View style={styles.pickerContainer}>
                <RNPickerSelect
                  placeholder={{ label: "Selecione um local...", value: "" }}
                  items={pickerOptions}
                  onValueChange={(value) => setSelectedGuessId(value)}
                  style={pickerSelectStyles}
                  value={selectedGuessId}
                  disabled={isGameWon}
                  // --- PROPS ADICIONADAS ---
                  useNativeAndroidPickerStyle={false}
                  Icon={() => {
                    return (
                      <Ionicons
                        name="chevron-down"
                        size={24}
                        color={colors.primaryDark}
                      />
                    );
                  }}
                />
                <Button
                  title="Adivinhar"
                  onPress={handleGuess}
                  disabled={
                    !selectedGuessId || selectedGuessId === "" || isGameWon
                  }
                  color={colors.primary}
                />

                {/* --- AVISO ADICIONADO --- */}
                <Text style={styles.disclaimerText}>
                  Ainda faltam locais (ex: Hotel Puffle, Universidade). Serão
                  adicionados em breve!
                </Text>
              </View>
            )}

            <FlatList
              data={guesses}
              renderItem={({ item }) => <GuessRow result={item} />}
              keyExtractor={(item) => item.guess.id.toString()}
              style={styles.guessList}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
