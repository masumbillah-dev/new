<?php
function mytheme70_custom_menu() {
    // register_nav_menu('top-menu', 'Primary Menu');
    // register_nav_menu('footer-menu-1', 'Footer Menu 1');
    // register_nav_menu('footer-menu-2', 'Footer Menu 2');
    
    // or you can use the following code to register multiple menus at once
    // register_nav_menu('primary', __('Primary Menu', 'mytheme70'));
    // register_nav_menu('footer-menu-1', __('Footer Menu 1', 'mytheme70'));
    // register_nav_menu('footer-menu-2', __('Footer Menu 2', 'mytheme70'));

    // or you can use the following code to register multiple menus at once
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'mytheme70'),
        'footer-menu-1' => __('Footer Menu 1', 'mytheme70'),
        'footer-menu-2' => __('Footer Menu 2', 'mytheme70'),
    ));
}
add_action('after_setup_theme', 'mytheme70_custom_menu');