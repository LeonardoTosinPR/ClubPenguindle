<?php

class MapController {

    private static $dataFile = __DIR__ . '/../data/locais.json';

    /**
     * Retorna a lista completa de locais
     */
    public static function getAllLocations() {
        try {
            $jsonData = file_get_contents(self::$dataFile);
            if ($jsonData === false) {
                throw new Exception("Não foi possível ler o arquivo locais.json");
            }
            // Apenas envia o JSON puro
            echo $jsonData;
            
        } catch (Exception $e) {
            self::sendError($e->getMessage());
        }
    }

    /**
     * Retorna um desafio (local) ALEATÓRIO
     */
    public static function getDailyChallenge() {
        try {
            $jsonData = file_get_contents(self::$dataFile);
            $locais = json_decode($jsonData, true);

            // Se o json_decode falhar, é porque o 'locais.json' tem um erro de sintaxe
            if ($locais === null) {
                throw new Exception("Erro ao decodificar o locais.json - Corrija o arquivo!");
            }

            // --- LÓGICA ALEATÓRIA ---
            // Pega uma chave aleatória do array de locais
            $indiceAleatorio = array_rand($locais);
            
            // Usa essa chave para pegar o local aleatório
            $localAleatorio = $locais[$indiceAleatorio];
            // --- FIM DA LÓGICA ALEATÓRIA ---

            echo json_encode($localAleatorio); // Envia o local aleatório

        } catch (Exception $e) {
            self::sendError($e->getMessage());
        }
    }

    /**
     * Função helper para enviar erros
     */
    private static function sendError($message) {
        http_response_code(500);
        echo json_encode(['error' => $message]);
    }
}
?>