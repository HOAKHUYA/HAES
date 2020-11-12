<?php
include_once('haes.php');

$haes =new AES;



$content = 'Hello world';
$passphrase = 'hello';


$enrcrypt = $haes->hencrypt($content,$passphrase);


$dercrypt = $haes->hdecrypt($enrcrypt,$passphrase);


header("Content-Type: text/plain");
echo "Encrypted: \t";
echo $enrcrypt;
echo "\n";
echo "\n";
echo "Decrypted: \t";
echo  $dercrypt;


?>