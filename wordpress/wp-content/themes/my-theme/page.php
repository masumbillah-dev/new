<?php get_header(); ?>
<!-- <h1>Page</h1> -->
<?php the_post(); ?>
<div class="site-cover site-cover-sm same-height overlay single-page" style="background-image: url('images/hero_5.jpg');">
    <div class="container">
        <div class="row same-height justify-content-center">
            <div class="col-md-6">
                <div class="post-entry text-center">
                    <h1 class="mb-4"><?php the_title(); ?></h1>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="section sec-halfs py-5">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <?php the_content(); ?>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>