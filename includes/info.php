<?php

    //-------------------------//
    // CLIENT
    //-------------------------//

    $Company_Name  = "Viral Vision Video";

    //-------------------------//
    // META
    //-------------------------//

    $Description_Site  = $Intro_Title;
    $Keywords_Site = $Company_Name.", YouTube, canal de YouTube, automatización, ingresos pasivos, inversión, monetización, socio, gestión, contenido, videos, crecer, negocio, rentabilidad, estrategia, marketing digital, emprendimiento, suscriptores, optimización, tráfico, audiencia";


    //-------------------------//
    // GENERAL
    //-------------------------//

    $Host_Site      = $_SERVER["HTTP_HOST"];
    $Lang           = "es";
    $Footer_Rights  = $Company_Name."© ".date("Y").". All rights reserved";

    //-------------------------//
    // MENU
    //-------------------------//

    $Menu = array(
        array($Menu_01),
        array($Menu_02),
        array($Menu_03),
        array($Menu_04),
        array($Menu_05)
    );

    //-------------------------//
    // CONDITIONS
    //-------------------------//

    $Lan = ($idioma == 'esp') ? 'Esp' : 'Eng';

    $None_en = ($idioma == 'esp') ? 'none' : 'block';
    $None_es = ($idioma == 'esp') ? 'block' : 'none';

    //-------------------------//
    // REPLICA
    //-------------------------//

    $Menu_Btn = array(
        array($Menu_Btn1, "https://my.viralyoutube.com/"),
        array($Menu_Btn2, "https://my.viralyoutube.com/join/{$_SESSION['user_replica']}")
    );

?>



























