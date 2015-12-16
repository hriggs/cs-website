<?php defined( '_JEXEC' ) or die( 'Restricted access' );

// Add JavaScript Frameworks
JHtml::_('bootstrap.framework');

// Load optional rtl Bootstrap css and Bootstrap bugfixes
JHtmlBootstrap::loadCss($includeMaincss = true);

?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/system/css/system.css" type="text/css" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/system/css/general.css" type="text/css" />
 <link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/cols.css" type="text/css" />
<link rel="stylesheet" href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/css/template.css" type="text/css" />
</head>
<body>
  
  <div class="row-fluid" id="nav-wrapper">
  <nav class="span12 navbar navbar-default navbar-fixed-top" id="nav">
    <div class="navbar-inner">
      <div class="container-fluid"> 
		<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> 
			<span class="icon-bar"></span> 
			<span class="icon-bar"></span> 
			<span class="icon-bar"></span> 
		</a>
        <div class="navbar-header"><a class="navbar-brand" href="/"><img src="/templates/cs/images/logo.png" alt="CS MassBay."></a>
          
        </div>
        <div class="nav-collapse collapse">
          <jdoc:include type="modules" name="nav" style="none" />
        </div>
      </div>
    </div>
  </nav>
</div> <!-- end navigation -->
    
  <div class="content">
    
<jdoc:include type="modules" name="breadcrumbs" /> 
<jdoc:include type="modules" name="top" />  
    
<jdoc:include type="component" />

	<footer>
    	&copy; 2015 MassBay Community College
	</footer>
  </div> <!-- end content -->
  <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script src="<?php echo $this->baseurl ?>/templates/<?php echo $this->template; ?>/js/scripts.js"></script>
</body>
</html>