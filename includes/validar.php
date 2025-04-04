<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';


// Almacenar el tiempo cuando se carga el formulario
if (!isset($_SESSION['form_time'])) {
    $_SESSION['form_time'] = time();
}

$scrollToForm = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verificar honeypot (campo oculto)
    if (!empty($_POST['honeypot'])) {
        echo '<p class="warning">' . $Alert_07 . '</p>';
        $scrollToForm = true;
    }

    // Verificar tiempo mínimo de llenado (evita bots rápidos)
    if (time() - $_SESSION['form_time'] < 5) { // Menos de 5 segundos
        echo '<p class="warning">' . $Alert_07 . '</p>';
        $scrollToForm = true;
    }

    $data = [
        'name' => strip_tags(htmlspecialchars($_POST['name'] ?? '', ENT_QUOTES, 'UTF-8')),
        'email' => strip_tags(htmlspecialchars($_POST['email'] ?? '', ENT_QUOTES, 'UTF-8')),
        'phone' => strip_tags(htmlspecialchars($_POST['phone'] ?? '', ENT_QUOTES, 'UTF-8')),
        'instagram' => strip_tags(htmlspecialchars($_POST['instagram'] ?? '', ENT_QUOTES, 'UTF-8'))
    ];

    $_SESSION = array_merge($_SESSION, $data);
    $errores = validarFormulario($data);

    if (empty($errores)) {
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host = 'mail.arkastudio.com.mx';
            $mail->SMTPAuth = true;
            $mail->Username = 'test@arkastudio.com.mx';
            $mail->Password = 'QM4NZDCTCCWCSGJQ';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;

            $mail->setFrom('test@arkastudio.com.mx', 'Arka Studio');
            $mail->addReplyTo($data['email'], $data['name']);
            $mail->addAddress('manuel.arkastudio@gmail.com', 'Destinatario');

            $mail->isHTML(true);
            $mail->Subject = 'Nuevo correo desde el sitio web de DISRUPTIVE STUDIO';

            $mail->Body = "
                <p><strong>Nombre:</strong> {$data['name']}</p>
                <p><strong>Email:</strong> {$data['email']}</p>
                <p><strong>Teléfono:</strong> {$data['phone']}</p>
                <p><strong>Instagram:</strong> {$data['instagram']}</p>";

            $mail->send();
            echo '<p class="success t-c">' . $Alert_05 . '</p>';
            
            // Limpiar la sesión completamente después de enviar el correo
            session_unset();
            session_destroy();
            session_start(); // Iniciar sesión nuevamente para evitar errores
            $_SESSION['form_time'] = time(); // Restablecer el tiempo del formulario
        } catch (Exception $e) {
            echo "<p class='warning'>" . $Alert_06 . " Error: " . $mail->ErrorInfo . "</p>";
            $scrollToForm = true;
        }
    } else {
        echo '<div class="errors-container">';
        foreach ($errores as $error) {
            echo $error;
        }
        echo '</div>';
        $scrollToForm = true;
    }
}

function validarFormulario($data) {
    global $Alert_01, $Alert_02, $Alert_03, $Alert_04;
    
    $errores = [];

    if (empty($data['name'])) 
        $errores[] = '<p class="warning">' . $Alert_01 . '</p>';

    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) 
        $errores[] = '<p class="warning">' . $Alert_02 . '</p>';

    if (empty($data['phone']) || !preg_match('/^\+?[0-9\s-]{10,15}$/', $data['phone']))
        $errores[] = '<p class="warning">' . $Alert_03 . '</p>';

    if (preg_match('/https?:\/\/|www\./i', $data['instagram'])) {
        $errores[] = '<p class="warning">' . $Alert_04 . '</p>';
    }

    return $errores;
}

// Si hubo errores o un bot detectado, hacer scroll al formulario
if ($scrollToForm) {
    echo '<script>
        document.addEventListener("DOMContentLoaded", function() {
            var formSection = document.getElementById("form");
            if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    </script>';
}
?>
