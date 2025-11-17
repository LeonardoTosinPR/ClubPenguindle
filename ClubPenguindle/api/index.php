<?php
// Define cabeçalhos
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 

// Importa os controladores
require_once __DIR__ . '/controllers/MapController.php';
require_once __DIR__ . '/controllers/CharacterController.php';

// Pega a "ação" da URL (ex: .../index.php?action=dailyMap)
// 'dailyMap' será o novo padrão
$action = isset($_GET['action']) ? $_GET['action'] : 'dailyMap';

// Roteia a ação para o controlador correto
switch ($action) {
    case 'allMaps':
        MapController::getAllLocations();
        break;
        
    case 'dailyMap':
        MapController::getDailyChallenge();
        break;
        
    case 'allCharacters':
        CharacterController::getAllCharacters();
        break;
        
    case 'dailyCharacter':
        CharacterController::getDailyChallenge();
        break;
        
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Ação não encontrada']);
        break;
}
?>