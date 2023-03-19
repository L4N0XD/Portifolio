<?php
if($_POST["submit"]) {
    $recipient="seu-email@exemplo.com";
    $subject=$_POST["subject"];
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["message"];

    $mailBody="Nome: $sender\nEmail: $senderEmail\n\nMensagem:\n$message";

    mail($recipient, $subject, $mailBody, "De: $sender <$senderEmail>");

    $thankYou="<p class='text'>Obrigado! Sua mensagem foi enviada.</p>";
}
?>

<?= $thankYou ?>
