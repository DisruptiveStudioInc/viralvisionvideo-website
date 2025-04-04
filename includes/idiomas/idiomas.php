<?php
//session_start();

if (@$_GET["language"]) {
    switch ($_GET["language"]) {
        case 'esp':
            $_SESSION["language"] = $_GET["language"];
            break;
        case 'eng':
            $_SESSION["language"] = $_GET["language"];
            break;
        default:
            $_SESSION["language"] = "eng";
            break;
    }
} elseif (!isset($_SESSION["language"])) { // Utiliza isset() para verificar si $_SESSION["language"] está definida
    $_SESSION["language"] = "esp";
}

include("" . $_SESSION["language"] . ".php");
?>

