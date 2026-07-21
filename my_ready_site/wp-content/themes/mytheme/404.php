<?php
/**
 * The template for displaying 404 pages (Not Found)
 *
 * @package YourTheme
 */

get_header();
?>

<main id="primary" class="site-main">

    <section class="error-404 not-found" style="text-align:center; padding:80px 20px;">
        
        <h1 style="font-size:80px; margin-bottom:10px;">404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
            Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div style="margin:30px 0;">
            <?php get_search_form(); ?>
        </div>

        <p>
            <a href="<?php echo esc_url(home_url('/')); ?>"
               style="display:inline-block; padding:12px 25px; background:#0073aa; color:#fff; text-decoration:none; border-radius:5px;">
                ← Back to Homepage
            </a>
        </p>

    </section>

</main>

<?php
get_footer();
?>