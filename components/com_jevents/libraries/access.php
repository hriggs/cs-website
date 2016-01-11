<?php
/**
 * JEvents Component for Joomla 1.5.x
 *
 * @version     $Id: access.php 3549 2012-04-20 09:26:21Z geraintedwards $
 * @package     JEvents
 * @copyright   Copyright (C) 2008-2015 GWE Systems Ltd, 2006-2008 JEvents Project Group
 * @license     GNU/GPLv2, see http://www.gnu.org/licenses/gpl-2.0.html
 * @link        http://www.jevents.net
 */

defined( '_JEXEC' ) or die( 'Restricted access' );

class JEVAccess {
	var $access;

	function JEVAccess(){
		// Editor usertype check
		global $acl;
		$user = JFactory::getUser();

		$this->access = new stdClass();
		$acl = JFactory::getACL();
		$this->access->canEdit	= $acl->acl_check( 'action', 'edit', 'users', JEVHelper::getUserType($user), 'content', 'all' );
		$this->access->canEditOwn = $acl->acl_check( 'action', 'edit', 'users', JEVHelper::getUserType($user), 'content', 'own' );
		$this->access->canPublish = $acl->acl_check( 'action', 'publish', 'users', JEVHelper::getUserType($user), 'content', 'all' );
	}

	function canEdit(){
		return $this->access->canEdit;
	}

	function canEditOwn(){
		return $this->access->canEditOwn;
	}

	function canPublish(){
		return $this->access->canPublish;
	}

}
