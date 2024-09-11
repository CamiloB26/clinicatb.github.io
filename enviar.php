<?php

    $email = $_POST['email'];
	$destino = "$email";
	$nombres = $_POST['nombres'];
	$seccion = $_POST['seccion'];
	$asunto = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];


    $body = "Nombres: " . $nombres . "<br>Seccion: " . $seccion . "<br>Asunto: " . $asunto . "<br>Mensaje: " . $mensaje;

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require "Exception.php";
    require "PHPMailer.php";
    require "SMTP.php";

    $mail = new PHPMailer(true);

try {

    //Server settings
    $mail->From = "audiovisuales@campestre.edu.co";	
    $mail->SMTPDebug = 0;                                        //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.office365.com';                   //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'audiovisuales@campestre.edu.co';       //SMTP username
    $mail->Password   = 'Campestre2018*';                       //SMTP password
    $mail->SMTPSecure = 'tls';                                  //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients

    $mail->setFrom('audiovisuales@campestre.edu.co', $nombres);
    $mail->addAddress($destino);     //Add a recipient
    $mail->addAddress('alopez@campestre.edu.co');               //Name is optional


    //Content

    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = ($asunto);
    $mail->CharSet = 'UTF-8';
    $mail->Body    = ('<b>NOMBRE: </b> '.' '.$nombres."<br><br>".' '.'<b>SECCIÓN: </b> '.' '.$seccion."<br><br>".' '.'<b>MENSAJE: </b><br><br>'.$mensaje);


    $mail->send();
    $mail->ClearAllRecipients();

    //echo 'Message has been sent';

    echo"<script>alert('Mensaje enviado exitosamente')</script>";
    echo"<script> setTimeout(\"location.href='index.html'\",1000)</script>";

    // header('Location: index.html?estado=1');

} catch (Exception $e) {

    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>