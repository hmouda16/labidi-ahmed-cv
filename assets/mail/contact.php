// poster reponses dans variables
if ($_SERVER["REQUEST METHOD"] == POST) {
    $nomClient = $_POST['name'];
    $emailClient = $_POST['email'];
    $commentairesClient = $_POST['commentaires'];
};

// traiter messages
$mailto = 'ahmed-1611@live.fr';
$sujet = 'Nouveau mail depuis le site internet de bg';
$mailheader = "From:".$emailClient."\r\n";
$mailheader .= "Reply-To:".$emailClient."\r\n";
$mailheader .= "Content-type: text/html; charset=UTF-8\r\n";
$message = "Nouveau mail de " . $nomClient . "\r\n" . "Son adresse mail est : " . $emailClient . "\r\n" . "Son message est : " . $commentairesClient;

//traiter mail

mail($mailto, $sujet, $message, $mailheader);

// success
if ($mail = true) {
    echo "ok";
};