<?php
function mytheme_customizer($wp_customize)
{
    // =============== Footer Section ===============
    // Add Section
    $wp_customize->add_section(
        'mytheme_footer_section',
        array(
            'title' => __('Footer Text', 'mytheme'),
            'priority' => 4,
        )
    );
    // Add Setting copyright
    $wp_customize->add_setting(
        'mytheme_footer_text',
        array(
            'default' => 'Copyright &copy; mytheme. All rights reserved.',
            'section' => 'mytheme_footer_section',
        )
    );
    // Add Control copyright
    $wp_customize->add_control(
        'mytheme_footer_text',
        array(
            'label' => __('Coppyright', 'mytheme'),
            'section' => 'mytheme_footer_section',
            'type' => 'text',
        )
    );
    // Add Setting additional info
    $wp_customize->add_setting(
        'mytheme_footer_info',
        array(
            'default' => 'Developed by mytheme',
            'section' => 'mytheme_footer_section',
        )
    );
    // Add Control additional info
    $wp_customize->add_control(
        'mytheme_footer_info',
        array(
            'label' => __('Additional Info', 'mytheme'),
            'section' => 'mytheme_footer_section',
            'type' => 'textarea',
        )
    );

    // ========================= Logo =========================
    // Add Section
    $wp_customize->add_section(
        'mytheme_logo_section',
        array(
            'title'    => __('Logo', 'mytheme'),
            'priority' => 30,
        )
    );
    // Add Setting
    $wp_customize->add_setting(
        'mytheme_logo',
        array(
            'sanitize_callback' => 'absint',
        )
    );
    // Add Control
    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'mytheme_logo',
            array(
                'label'     => __('Upload Logo', 'mytheme'),
                'section'   => 'mytheme_logo_section',
                'mime_type' => 'image',
            )
        )
    );
}
add_action('customize_register', 'mytheme_customizer');
