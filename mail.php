<?php 


    $to = "sharadrg@gmail.com"; 
    $subject = "Website Inquiry";
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $from = $_POST['email'];
    
    
    $headers = "From:";
    echo $phone; 
    

    /*mail($to,$subject,$message,$headers); */
    
    $retval = mail ($to,$subject,$message,$headers);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }
    


?>