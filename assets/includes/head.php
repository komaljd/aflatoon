<?php 
	 define('ENVIRONMENT', isset($_SERVER['ENV']) ? $_SERVER['ENV'] : 'development');
	 
	 switch (ENVIRONMENT)
	 {
			 case 'development':
					 error_reporting(-1);
					 ini_set('display_errors', 1);
					 $base_url = 'http://localhost/aflatoon/';
			 break;
			 case 'testing':
					 ini_set('display_errors', 0);
					 if (version_compare(PHP_VERSION, '5.3', '>='))
					 {
							 error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED & ~E_STRICT & ~E_USER_NOTICE & ~E_USER_DEPRECATED);
					 }
					 else
					 {
							 error_reporting(E_ALL & ~E_NOTICE & ~E_STRICT & ~E_USER_NOTICE);
					 }
					 $base_url = 'http://localhost/af/';
			 break;
			 case 'production':
					 ini_set('display_errors', 0);
					 if (version_compare(PHP_VERSION, '5.3', '>='))
					 {
							 error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED & ~E_STRICT & ~E_USER_NOTICE & ~E_USER_DEPRECATED);
					 }
					 else
					 {
							 error_reporting(E_ALL & ~E_NOTICE & ~E_STRICT & ~E_USER_NOTICE);
					 }
					 $base_url = 'http://aflatoondesigns.com/';
			 break;
	 
			 default:
					 header('HTTP/1.1 503 Service Unavailable.', TRUE, 503);
					 echo 'The application environment is not set correctly.';
					 exit(1); // EXIT_ERROR
	 }
	 
	 /* for active menu */
	 $request_uri = $_SERVER['REQUEST_URI'];
	 $current_url = $request_uri;
	 if (strpos($request_uri, 'af/'))
	 {
			 $current_url = str_replace('/af/', '', $request_uri);
	 }
	 else
	 {
			 $current_url = str_replace('/af', '', $request_uri);
	 }
	 if($current_url == '')
	 {
			 $current_url = 'index';
	 }
	 
	 /* code for canonical tag  */
	 ?>

<head>
	<meta charset="utf-8">
	<meta name="description" content="">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>aflatoon</title>
	<!-- favicon -->

	<link rel="apple-touch-icon" sizes="60x60" href="<?php echo $base_url; ?>assets/images/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $base_url; ?>assets/images/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $base_url; ?>assets/images/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $base_url; ?>assets/images/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $base_url; ?>assets/images/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $base_url; ?>assets/images/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $base_url; ?>assets/images/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $base_url; ?>assets/images/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo $base_url; ?>assets/images/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo $base_url; ?>assets/images/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="<?php echo $base_url; ?>assets/images/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo $base_url; ?>assets/images/favicon/favicon-16x16.png">
	<link rel="manifest" href="<?php echo $base_url; ?>assets/images/favicon/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">

	<!-- plugincss -->
	<link href="<?php echo $base_url; ?>assets/css/pulgin.css"  rel="stylesheet" >
	<!-- header -->
	<link href="<?php echo $base_url; ?>assets/css/header.css"   rel="stylesheet" >
	<link href="<?php echo $base_url; ?>assets/css/loader.css"   rel="stylesheet" >
	<!-- css -->
	<link href="<?php echo $base_url; ?>assets/css/style.css"  rel="stylesheet" >
	<!-- css -->
	<link href="<?php echo $base_url; ?>assets/css/responsive.css"    rel="stylesheet" >

</head>