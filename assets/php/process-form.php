<?php
if(isset($_POST['submit'])) {
    $to = "seu-email@exemplo.com"; 
    $subject = "Mensagem do formulário de contato"; 
    $message = "Nome: " . $_POST['name'] . "\n\nEmail: " . $_POST['email'] . "\n\nAssunto: " . $_POST['subject'] . "\n\nMensagem: " . $_POST['message']; 
    $headers = "From: noreply@seu-site.com"; 
    mail($to, $subject, $message, $headers); 
}
?>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSddpIb1FWiAsQruIcZdme4ujfvKmxOF-egD6UgG_xeC_0d9vg/viewform?embedded=true" width="640" height="947" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>