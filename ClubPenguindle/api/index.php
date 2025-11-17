<?php
header("Content-Type: application/json");

echo json_encode([
    "status" => "API online",
    "message" => "ClubPenguindle backend funcionando!"
]);