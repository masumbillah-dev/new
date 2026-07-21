<?php get_header(); ?>

<div class="error-404" style="text-align:center; padding:80px 20px;">
    
    <h1 style="font-size:72px; margin-bottom:10px;">404</h1>
    
    <h2 style="margin-bottom:20px;">Page Not Found</h2>
    
    <p style="margin-bottom:30px;">
        Sorry, the page you are looking for doesn’t exist or has been moved.
    </p>

    <a href="<?php echo esc_url(home_url('/')); ?>" 
       style="
            display:inline-block;
            padding:12px 25px;
            background:#0073aa;
            color:#fff;
            text-decoration:none;
            border-radius:5px;
            font-size:16px;
        ">
        ← Back to Home
    </a>

</div>

<?php get_footer(); ?>