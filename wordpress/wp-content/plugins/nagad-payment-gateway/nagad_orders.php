<?php
namespace Nagad\Gateway\Payment;


class nagad_orders{

    public function __construct(){
        add_action('admin_menu', [$this, 'admin_panel']);
    }

    public function admin_panel() {
        $hook = add_menu_page(
            __('Nagad Transactions', 'nagad-pay'), //page title
            __('Nagad Transactions', 'nagad-pay'), //menu title
            'manage_options', //capability
            'nagad-pay', //menu slug
            [$this, 'nagad_order_page'], //function
            NAGAD_PLUGIN_URL . 'logo/ngd.png' //icon url
            //1 //position
        );
    }

    public function nagad_order_page() {
        ?>
        <div class="wrap">
            <div style = "align-items: center;">
                <img src="<?php echo NAGAD_PLUGIN_URL . '/logo/nagad_cover.png'; ?>" alt="" style = "height: 45px; width:105px;">
                <h4 id="nagad-notice" style = "color: red; font-size: 20px;">If this feature is not working properly please reactivate the plugin.</h4>
            </div>

            <form action="" method="post">
                <?php
                    $table = new \Nagad\Gateway\Payment\txn_list();
                    isset( $_POST['s'] ) ? $table->prepare_items( $_POST['s'] ) : $table->prepare_items();

                    $table->search_box( 'Search', 'nagad-pay');?>
                     <script>
                        jQuery(document).ready(function($) {
                            // Set placeholder for search input
                            $('input[name="s"]').attr('placeholder', 'Order Id / Nagad Txn Id');
                            
                            // Make the notice disappear after 5 seconds
                            setTimeout(function() {
                                $('#nagad-notice').fadeOut('slow');
                            }, 5000);
                        });
                    </script>
                    <?php
                    $table->display();
                ?>
            </form>
        </div>
        <?php
    }

}
?>