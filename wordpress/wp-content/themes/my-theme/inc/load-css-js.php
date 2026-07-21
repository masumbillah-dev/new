<?php 
function mytheme70_add_css_js(){
    wp_enqueue_style( 
        'main-style', 
        get_template_directory_uri() . '/assets/css/style.css', 
        array(), 
        null, 
        "all" 
    );
    wp_enqueue_style( 
        'style', 
        get_template_directory_uri() . '/style.css'
    );
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/assets/js/bootstrap.bundle.min.js', array(), null, true);
    wp_enqueue_script('navbar-js', get_template_directory_uri() . '/assets/js/navbar.js', array(), null, true);
}

add_action( "wp_enqueue_scripts", "mytheme70_add_css_js");