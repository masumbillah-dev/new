<?php
function mytheme_custom_menu() {
    // register_nav_menu('top-menu', 'Primary Menu');
    // register_nav_menu('footer-menu-1', 'Footer Menu 1');
    // register_nav_menu('footer-menu-2', 'Footer Menu 2');

    // or
    // register_nav_menu('top-menu', __('Primary Menu', 'mytheme'));
    // register_nav_menu('footer-menu-1', __('Footer Menu 1', 'mytheme'));
    // register_nav_menu('footer-menu-2', __('Footer Menu 2', 'mytheme'));

    // or
    register_nav_menus(array(
        'top-menu'      => __('Primary Menu', 'mytheme'),
        'footer-menu-1' => __('Footer Menu 1', 'mytheme'),
        'footer-menu-2' => __('Footer Menu 2', 'mytheme'),
    ));

}
add_action('after_setup_theme', 'mytheme_custom_menu');