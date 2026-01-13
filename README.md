# 🐧 ClubPenguindle

Um jogo de adivinhação estilo Wordle, com o tema Club Penguin. O desafio foca em usar pistas ricas e comparáveis para acertar a resposta do dia.

# 🇧🇷 Versão em Português

## 📖 Sobre o Projeto

ClubPenguindle é um jogo de adivinhação inspirado no Wordle e ambientado no universo do Club Penguin.

Diferente do Wordle tradicional, o jogador adivinha um local específico do mapa. O desafio está em usar pistas ricas e baseadas em categorias para restringir as possibilidades.

A cada dia, um "desafio do dia" é selecionado aleatoriamente. Após cada palpite, o jogo fornece feedback usando um sistema de cores (Verde, Amarelo, Vermelho) baseado na correspondência de propriedades como Região, Personagem(ns) Associado(s), Tipo de Local e Ano de Lançamento.

## 📱 Tecnologias Utilizadas

### Frontend

- **React Native** (Expo) - Framework para desenvolvimento multiplataforma
- **TypeScript** - Tipagem estática para melhor qualidade de código
- **React Navigation** - Navegação entre telas
- **Dados locais em JSON** - Sem dependência de servidor

### Estrutura do Projeto

```
app/
├── data/
│   ├── locais.json        # 31 locais do Club Penguin
│   └── personagens.json   # 9 personagens principais
├── screens/
│   ├── MapaScreen/        # Tela principal do jogo
│   ├── PersonagemScreen/  # Tela com lista de personagens
│   └── SobreScreen/       # Tela de informações
├── components/
│   ├── game/              # Componentes de gameplay
│   └── layout/            # Componentes de layout
├── services/
│   └── api.ts             # Funções que importam dados locais
└── theme/
    ├── colors.ts
    ├── fonts.ts
    ├── metrics.ts
    └── commonStyles.ts
```

## 🚀 Como Executar

### Requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
cd ClubPenguindle/app
npm install
```

### Desenvolvimento

```bash
npm run start      # Inicia o servidor Expo
npm run web        # Executa no navegador
npm run android    # Executa no Android
npm run ios        # Executa no iOS
```

### Deploy para GitHub Pages

```bash
npm run deploy
```

## 🎮 Como Jogar

1. A cada dia, um novo local é selecionado como desafio
2. O jogador tem múltiplas tentativas para adivinhar o local
3. Após cada palpite, as cores indicam:
   - 🟩 **Verde**: Correspondência exata
   - 🟨 **Amarelo**: Parcialmente correto
   - 🟥 **Vermelho**: Incorreto
4. Use as dicas de personagens, região, tipo e ano de lançamento

# 🇺🇸 English Version

## 📖 About the Project

ClubPenguindle is a guessing game inspired by Wordle and themed around Club Penguin.

Unlike traditional Wordle, the player guesses a specific location on the map. The challenge lies in using rich, category-based clues to narrow down the possibilities.

Each day, a random "puzzle of the day" is selected. After each guess, the game provides feedback using a color-coded system (Green, Yellow, Red) based on matching properties such as Region, Associated Character(s), Location Type, and Launch Year.

## 📱 Technologies Used

### Frontend

- **React Native** (Expo) - Framework for cross-platform development
- **TypeScript** - Static typing for better code quality
- **React Navigation** - Navigation between screens
- **Local JSON data** - No server dependency

### Project Structure

```
app/
├── data/
│   ├── locais.json        # 31 Club Penguin locations
│   └── personagens.json   # 9 main characters
├── screens/
│   ├── MapaScreen/        # Main game screen
│   ├── PersonagemScreen/  # Characters list screen
│   └── SobreScreen/       # Information screen
├── components/
│   ├── game/              # Gameplay components
│   └── layout/            # Layout components
├── services/
│   └── api.ts             # Functions to load local data
└── theme/
    ├── colors.ts
    ├── fonts.ts
    ├── metrics.ts
    └── commonStyles.ts
```

## 🚀 How to Run

### Requirements

- Node.js 18+
- npm or yarn

### Installation

```bash
cd ClubPenguindle/app
npm install
```

### Development

```bash
npm run start      # Start Expo server
npm run web        # Run in browser
npm run android    # Run on Android
npm run ios        # Run on iOS
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🎮 How to Play

1. Each day, a new location is selected as the daily challenge
2. The player has multiple attempts to guess the location
3. After each guess, colors indicate:
   - 🟩 **Green**: Exact match
   - 🟨 **Yellow**: Partially correct
   - 🟥 **Red**: Incorrect
4. Use the clues about characters, region, type, and launch year to narrow down your guess
