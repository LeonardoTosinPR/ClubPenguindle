# 🐧 ClubPenguindle
Um jogo de adivinhação estilo Wordle, com o tema Club Penguin. O desafio foca em usar pistas ricas e comparáveis para acertar a resposta do dia.

# 🇧🇷 Versão em Português
## 📖 Sobre o Projeto
ClubPenguindle é um jogo de adivinhação inspirado no Wordle e ambientado no universo do Club Penguin.

Diferente do Wordle tradicional, o jogador adivinha uma entidade específica (o local do mapa). O desafio está em usar pistas ricas e baseadas em categorias para restringir as possibilidades e causar "dúvida".

A cada dia, a API define um "desafio do dia". Após cada palpite, o jogo fornece feedback usando um sistema de cores (Verde, Amarelo, Vermelho) baseado na correspondência de propriedades como Região, Personagem(ns) Associado(s), Cor e Ano de Lançamento.

## 📱 Tecnologias Utilizadas
### Frontend
React Native (Expo)

Fetch API para requisições

Interface avançada para comparação de pistas (indicadores Verde/Amarelo/Vermelho, setas para pistas numéricas).

### Backend
PHP 8

Armazenamento simples em JSON (sem banco de dados)

Endpoints no estilo REST

Lógica implementada para lidar com comparação complexa de arrays (para Personagens/Pistas Associadas).

# 🇺🇸 English Version
## 📖 About the Project
ClubPenguindle is a guessing game inspired by Wordle and themed around Club Penguin.

Unlike traditional Wordle, the player guesses a specific Location on map. The challenge lies in using rich, category-based clues to narrow down the possibilities and create "doubt."

Each day, the API defines one "puzzle of the day." After each guess, the game provides feedback using a color-coded system (Green, Yellow, Red) based on matching properties such as Region, Associated Character(s), Color, and Launch Year.

## 📱 Technologies Used
### Frontend
React Native (Expo)

Fetch API for data requests

Advanced UI for clue comparison (Green/Yellow/Red indicators, Up/Down arrows for numerical clues).

### Backend
PHP 8

Simple JSON data storage (no database)

REST-style endpoints

Logic implemented to handle complex array comparison (for shared Associated Characters/Clues).
