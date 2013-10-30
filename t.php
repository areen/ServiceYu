<?php

 $client = new SoapClient("http://localhost:8700/Service1.asmx?WSDL");

   //$user=$_POST['ID'];
      //  $pass=$_POST['Password'];
$params = array( 'ID'  => $_POST['ID'], 
                   'Password' => $_POST['Password']);
   

    $result = $client->GetInfo($params)->GetInfoResult;
  
     echo "Login Succsess"."</br>";
    echo $result;
  
    ?>



