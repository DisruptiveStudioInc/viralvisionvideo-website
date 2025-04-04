<?php 
	session_start();
	error_reporting(0);
	$funnel_sponsor = $_GET['sp'];
	$user_replica = NULL;
	if(!empty($funnel_sponsor)){
		$user_replica = $funnel_sponsor;	
	}
	else{
		$uri_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
		$uri_segments = explode('/', $uri_path);
		$user_replica = isset($uri_segments[1]) ? $uri_segments[1] : NULL;
		$user_replica = empty($user_replica) ? 'admin' : $user_replica;	
	}
	$_SESSION['user_replica'] = $user_replica;
?>
<!-- header -->
<?php
	include("./includes/header.php");
?>
<!-- /header -->

	<?php
	$pages_dir = 'pages';

		if(!empty($_GET['p'])){

			$pages = scandir ($pages_dir, 0);
			unset ($pages[0], $pages[1]);
			$p = $_GET['p'];

			if (in_array($p.'.inc.php', $pages)){
				include ($pages_dir.'/'.$p.'.inc.php');
			}else{
				echo '<section><div class="jc-center ai-center h-100"><p>Sorry, the page does not exist.</p></div></section>';
			}
		} else {
			include($pages_dir.'/home.inc.php');
		}
	?>

<!-- footer -->
	<?php include("./includes/footer.php"); ?>
<!-- /footer -->















