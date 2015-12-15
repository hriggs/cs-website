<?php
/**
 * @package OS_ImageGallery_Free
 * @subpackage  OS_ImageGallery_Free
 * @copyright Andrey Kvasnevskiy-OrdaSoft(akbet@mail.ru); Anton Panchenko(nix-legend@mail.ru); 
 * @Homepage: http://www.ordasoft.com
 * @version: 1.0 
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 * */
defined('_JEXEC') or die;
require_once dirname(__FILE__).'/helpers/images.php';

JHtml::_('stylesheet',JURI::base()."/modules/mod_os_imagegallery_free/assets/css/image.gallery.css");
JHtml::_('stylesheet',JURI::base()."/modules/mod_os_imagegallery_free/assets/css/jquery.fancybox.css");
  $doc =JFactory::getDocument();
if($params->get('jquery-local',0)) {
  JHtml::_('script',JURI::base()."/modules/mod_os_imagegallery_free/assets/js/fancyboxLocal/jquerloc.min.js");
}elseif($params->get('jquery',0)) {
  $doc->addScript('//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
}

if($params->get('no-conflict',0)) {
  if($params->get('jquery-local',0)) {
    $doc->addScriptDeclaration("jQuerLoc.noConflict();");
  }else{
    $doc->addScriptDeclaration("jQuery.noConflict();");
  }
}

if($params->get('jquery-local',0)){
  JHtml::_('script',JURI::base()."/modules/mod_os_imagegallery_free/assets/js/fancyboxLocal/jquerloc.fancybox.js");
  JHtml::_('script',JURI::base()."/modules/mod_os_imagegallery_free/assets/js/fancyboxLocal/jquerloc.fancybox-init.js");
}else{
  JHtml::_('script',JURI::base()."/modules/mod_os_imagegallery_free/assets/js/jquery.fancybox.js");
  JHtml::_('script',JURI::base()."/modules/mod_os_imagegallery_free/assets/js/jquery.fancybox-init.js");
}

if(!is_numeric($width = $params->get('width'))) $width = 350;
if(!is_numeric($height = $params->get('height'))) $height = 240;
if(!is_numeric($img_in_row = $params->get('img_in_row'))) $img_in_row = 3;

$button_name = $params->get('button_name');
$dir = JPATH_ROOT . '/images/os_imagegallery_' . $module->id;
$sufix = $params->get('sufix','');
require JModuleHelper::getLayoutPath('mod_os_imagegallery_free', $params->get('layout', 'default'));