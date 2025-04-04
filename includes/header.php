<?php
    include("idiomas/idiomas.php");
    $idioma = $_SESSION["language"];
    include("info.php");
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="<?php echo $Lang; ?>" xml:lang="<?php echo $Lang; ?>">

<head>

    <!-- X -->
    <meta name="twitter:card"        content="summary">
    <meta name="twitter:site"        content="<?php echo $Host_Site; ?>">
    <meta name="twitter:title"       content="<?php echo $Company_Name; ?>">
    <meta name="twitter:description" content="<?php echo $Description_Site; ?>">
    <meta name="twitter:creator"     content="<?php echo $Company_Name; ?>">
    <meta name="twitter:image"       content="/images/facebook/facebook.jpg">

    <!-- FACEBOOK -->
    <meta property="og:site_name"    content="<?php echo $Company_Name; ?>" />
    <meta property="og:url"          content="<?php echo $Host_Site; ?>" />
    <meta property="og:title"        content="<?php echo $Company_Name; ?>" />
    <meta property="og:type"         content="website" />
    <meta property="og:description"  content="<?php echo $Description_Site; ?>" />
    <meta property="og:image"        content="/images/facebook/facebook.jpg" />
    <meta property="og:image:width"  content="1024" />
    <meta property="og:image:height" content="538" />

    <!-- METAS-->
    <meta name="viewport"            content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type"  content="text/html; charset=UTF-8" />
    <meta name="description"         content="<?php echo $Description_Site; ?>" />
    <meta name="keywords"            content="<?php echo $Keywords_Site; ?>" />
    <meta name="autor"               content="<?php echo $Company_Name; ?>" />

    <title><?php echo $Company_Name; ?></title>

    <!-- STYLES-->
    <link rel="stylesheet" type="text/css" href="./css/min/reset.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/min/main.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/min/root.min.css" />

    <link rel="stylesheet" type="text/css" href="./css/body/style.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/body/navigation.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/body/slick.css" />

    <!-- FAVICON -->
    <link rel="apple-touch-icon" sizes="57x57" href="./images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="./images/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon/favicon-16x16.png">
    <link rel="manifest" href="./images/favicon/manifest.json">
    <meta name="msapplication-config" content="./images/favicon/browserconfig.xml" />
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="./images/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <Link rel="shortcut icon" href="./images/favicon/favicon.ico" />

    <!-- SCRIPTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Teko:wght@300..700&display=swap" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-2.0.3.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" defer></script>

</head>
    <body class="c-100">

        <!-- ============================================== -->
        <!-- PRELOADER -->
        <!-- ============================================== -->

        <div id="preloader">
          <div id="progress">
            <span id="data">0%</span>
          </div>
        </div>

        <!-- ============================================== -->
        <!-- NAVIGATION -->
        <!-- ============================================== -->

        <header>
            <nav class="nav">
                <div class="navigation jc-between ai-center">
                    
                    <div class="jc-center ai-center g-30 small-g-10">
                        <div class="logo">
                            <img src="./images/logo/logo.svg" alt="logo v3">
                        </div>
                        <div class="rel">
                            <div class="btn-lan"><?= $Lan; ?></div>
                            <ul class="lan">
                                <li><a href='?language=esp' class="<?php if ($idioma == 'esp'){echo 'active';}else{echo '';} ?>">Esp</a></li>
                                <li><a href='?language=eng' class="<?php if ($idioma == 'eng'){echo 'active';}else{echo '';} ?>">Eng</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="jc-center ai-center g-20">
                        <?php foreach ($Menu_Btn as $value): ?>
                            <a href="<?php echo $value[1]; ?>" target="_blank" class="btn br-10 c-pri small-d-none">
                                <span>
                                    <?php echo $value[0]; ?>
                                </span>
                            </a>
                        <?php endforeach; ?>
                        
                        <div class="hamburguer">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div class="menu">
                        <ul>
                            <?php
                                $numero = 1;
                                foreach ($Menu as $item) {
                                    $clase = ($numero === 1) ? 'active' : '';
                                    echo "<li><a href='#anchor{$numero}' class='{$clase}' >{$item[0]}</a></li>";
                                    $numero++;
                                }
                                foreach ($Menu_Btn as $value) { ?>
                                <li class="d-none small-d-block"><a href="<?php echo $value[1]; ?>" target="_blank"><?php echo $value[0]; ?></a></li>
                            <?php } ?>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <!-- ============================================== -->
        <!-- PAGE CONTENT -->
        <!-- ============================================== -->

        <main id="page-content" class="of-h">





