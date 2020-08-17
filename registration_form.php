<!DOCTYPE html>
<html>
   <?php include('assets/includes/head.php');?>
   <body>
	  <div class="mainWrapper">
		 <div class="bodyWrapper">
			<!-- section3 -->
			<section class="about bg-img work-section " id="bg_work">
			   <div class="imgSize d_sm_block d_md_none">
				  <img src="<?php echo $base_url; ?>assets/images/banner/our_work.jpg" alt="our-work">
			   </div>
			   <!-- about-circle -->
			   <div class="container">
				  <div class="equalPadding ">
					 <div class="content text-center">
						<div class="" data-aos="zoom-in">
						   <div class="imgSize">
							  <a href="<?php echo $base_url; ?>#work"><img src="<?php echo $base_url; ?>assets/images/logo/mob_logo.png" alt="eye"></a>
						   </div>
						</div>
						<!-- title -->
						<div class="title ">
						   <h2 class="font-sm-h2 mt-md-5 mt-2 font-comic text-black"  data-aos="fade-up" data-aos-duration="1000"> 
						   
						    
<?php
// the message
$name = $_GET["name"];

$contact = $_GET["contact"];

$email = $_GET["email"];
$message = $_GET["message"]."  Contact Number ".$contact." Email  ".$email;

// use wordwrap() if lines are longer than 70 characters
//mail("sharadrg@gmail.com","Aflatun",$message);




if(@mail("contact@aflatoondesigns.com", "Aflatoon Email", $message,"Header"))
{
  echo "Mail Sent Successfully";
}else{
  echo "Mail Not Sent";
}


// send email

?>
						   
						   
						   </h2>
						</div>
					 </div>
				  </div>
			   </div>
			</section>
			<!-- wave -->
			<!-- <div class="watereffect bg-img">
			   </div>	 -->
			<!-- workgallery -->
			
			<div class="bottom-up">
			   <span></span>
			</div>
		 </div>
		 <!-- footer -->
		 <?php include('assets/includes/footer.php');?>
		 <!--/.footer -->
	  </div>
   </body>
</html>



