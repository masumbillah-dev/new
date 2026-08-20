<?php

/**
 * Plugin Name: Team Management
 * Description: Integrate team management features into your company.
 * Version: 1.0.0
 * Author: Asia
 * Author URI: https://example.com
 * Text Domain: team-management
 */

if (! defined('ABSPATH')) {
    exit;
}
if (!session_id()) session_start();

require_once(__DIR__ . '/includes/menus.php');
require_once(__DIR__ . '/includes/shortcode.php');

function team_members_list() {
    require_once(__DIR__ . '/templates/team-manage.php');
    require_once(__DIR__. '/includes/shortcode.php');
}


function team_members_add()
{
    require_once(__DIR__ . '/templates/team-add.php');
}

function team_members_edit()
{
    require_once(__DIR__ . '/templates/team-edit.php');
}

require_once(__DIR__ . '/includes/db-table.php');