<?php

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        //get the message
        $message = strip_tags(trim($_POST["message"]));

        //check data
        if(empty($message)){
            http_response_code(400);
            echo "Goed geprobeerd, maar lege berichten hoef ik niet te lezen.";
            exit;
        }

        //set recipient mailadres
        $recipient = 'satch@iamjer.be';

        //set mail subject
        $subject = "Woehoew, nieuw bericht van satch.cc";

        //build email content
        $email_content = $message;

        //set email header
        $email_headers = 'From: Satch.cc <site@satch.cc>';

        //send mail
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Bedankt, je hoort snel van me!";
        }else{
            http_response_code(500);
            echo "Oeps, er ging iets mis. Dat gebeurt al eens. Probeer je even opnieuw?";
        }
    }else{
        //not a post request
        http_response_code(403);
        echo "Oeps, er ging iets mis. Dat gebeurt al eens. Probeer je even opnieuw?";
    }