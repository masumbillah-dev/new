<?php
// Theme Customizer

function mytheme70_customizer($wp_customize) {
    // Add customizer settings and controls here
    $wp_customize->add_section("mytheme70_footer_section", 
    array(
        "title" => __("Footer Text", "mytheme70"),
        'priority' => 4,
        // "description" => __("Customize your theme options", "mytheme70"),
         )
    );
    $wp_customize->add_section(
        "mytheme70_footer_text", 
    array(
        "title" => __("Footer Text", "mytheme70"),
        "priority" => 4,
        )
    );

    $wp_customize->add_setting(
        "mytheme70_footer_text", 
    array(
        "default" => "Copyright &copy; MyTheme 2026. All Rights Reserved.",
        "section" => "mytheme70_footer_section",
        
    )
    
    );
    $wp_customize->add_control(
    "mytheme70_footer_text", 
    array(
        "label" => __("Copyright", "mytheme70"),
        "section" => "mytheme70_footer_section",
        "type" => "text",
    )
    );
    $wp_customize->add_setting(
        "mytheme70_footer_text-2", 
    array(
        "default" => "All Rights Reserved.",
        "section" => "mytheme70_footer_section",
        
    )
    
    );
    $wp_customize->add_control(
    "mytheme70_footer_text-2", 
    array(
        "label" => __("Additional Copyright", "mytheme70"),
        "section" => "mytheme70_footer_section",
        "type" => "textarea",
    )
    );
    $wp_customize->add_setting(
    "mytheme70_logo",
    array(
        "default" => "",
        "sanitize_callback" => "absint",
    )
    );
    $wp_customize->add_control(
        new WP_Customize_Image_Control(
        $wp_customize,
        "mytheme70_logo",
        array(
            "label"    => __("Upload Logo", "mytheme70"),
            "section"  => "title_tagline", // Default Site Identity section
            "settings" => "mytheme70_logo",
        )
    )
    );

    $logo = get_theme_mod("mytheme70_logo");

    if ($logo) {
    echo '<img src="' . esc_url(wp_get_attachment_url($logo)) . '" alt="' . get_bloginfo("name") . '">';
    }
}
add_action('customize_register', 'mytheme70_customizer');
