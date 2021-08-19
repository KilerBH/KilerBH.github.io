<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$email = $_POST['user-email'];
$phone = $_POST['user-phone'];
$radio = $_POST['radios'];
$check = $_POST['check'];
$name = $_POST['name'];
$words = $POST['words'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'Kilerbh1221@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'wbwnnl521221'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('Kilerbh1221@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('kilerbh@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Тема сообщения';
$mail->Body    = ''.$email . '<br>'. $phone. '<br>'. $radio. '<br>'. $check. '<br>'. $name. '<br>'. $words;
$mail->AltBody = '';

if(!$mail->send()) {
    echo false;
} else {
    echo true;
}

?>