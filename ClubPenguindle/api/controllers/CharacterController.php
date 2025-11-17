<?php

class CharacterController {

    private static $dataFile = __DIR__ . '/../data/personagens.json';

    /**
     * Retorna a lista completa de personagens
     */
    public static function getAllCharacters() {
        try {
            $jsonData = file_get_contents(self::$dataFile);
            if ($jsonData === false) {
                throw new Exception("Não foi possível ler o arquivo personagens.json");
            }
            echo $jsonData;
            
        } catch (Exception $e) {
            self::sendError($e->getMessage());
        }
    }

    /**
     * Retorna um desafio (personagem) ALEATÓRIO
     */
    public static function getDailyChallenge() {
        try {
            $jsonData = file_get_contents(self::$dataFile);
            // Usa a variável correta '$personagens'
            $personagens = json_decode($jsonData, true);

            // Usa a mensagem de erro correta
            if ($personagens === null) {
                throw new Exception("Erro ao decodificar o personagens.json - Corrija o arquivo!");
            }

            // --- LÓGICA ALEATÓRIA ---
            $indiceAleatorio = array_rand($personagens);
            $personagemAleatorio = $personagens[$indiceAleatorio];
            // --- FIM DA LÓGICA ALEATÓRIA ---

            echo json_encode($personagemAleatorio); // Envia o personagem aleatório

        } catch (Exception $e) {
            self::sendError($e->getMessage());
        }
    }

    private static function sendError($message) {
        http_response_code(500);
        echo json_encode(['error' => $message]);
    }
}
?>