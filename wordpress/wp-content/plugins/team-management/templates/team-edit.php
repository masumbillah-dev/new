<?php
global $wpdb;
$table = $wpdb->prefix . 'team_members';

if (isset($_POST['submit'])) {
    // echo $_POST['name'];
    // echo $_POST['designation'];
    // echo $_POST['email'];
    if ($_FILES['img']['size'] > 0) {
        // Required WordPress files
        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/image.php';
        require_once ABSPATH . 'wp-admin/includes/media.php';

        // Upload to Media Library
        $attachment_id = media_handle_upload('img', 0);
    }
    $res = $wpdb->update(
        $table,
        array(
            'name'          => $_POST['name'],
            'designation'   => $_POST['designation'],
            'email'         => $_POST['email'],
            'image'         => $attachment_id ?? $_POST['img_old']
        ),
        array(
            'id' => $_POST['id']
        )
    );
    if ($res) {
        $_SESSION['flash_msg'] = "Data for ID: " . $_POST['id'] . " updated successfully.";

        wp_redirect(admin_url('admin.php?page=team-list'));
        // echo "<script>window.location = 'admin.php?page=team-list'</script>";
    } else if ($res == 0) {
        echo '<div class="notice notice-warning is-dismissible">
                    <p>Nothing to updated.</p>
                </div>';
    } else {
        echo '<div class="notice notice-error is-dismissible">
                    <p>Something went wrong. Data not updated.</p>
                </div>';
    }
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $item = $wpdb->get_row("SELECT * FROM $table WHERE id=$id");
    // echo "<pre>";
    // print_r($item);
    // echo "</pre>";
    if ($item->image != null) {
        $img_link = wp_get_attachment_url($item->image);
    } else {
        $img_link = 'https://placehold.co/100x100?text=No+Image';
    }
}

?>
<div class='form-wrap'>
    <a href='admin.php?page=team-list' class='button button-primary'>Back to Member List</a>
    <h2>Edit Team Member</h2>
    <form method='post' action='' class='validate' enctype='multipart/form-data'>
        <input type='hidden' name='id' value='<?php echo $item->id; ?>'>
        <div class='form-field'>
            <label>Name</label>
            <input name='name' type='text' value='<?php echo $item->name; ?>' size='40'>
        </div>
        <div class='form-field'>
            <label>Designation</label>
            <input name='designation' type='text' value='<?php echo $item->designation; ?>' size='40'>
        </div>
        <div class='form-field'>
            <label>Email</label>
            <input name='email' type='text' value='<?php echo $item->email; ?>' size='40'>
        </div>
        <div class='form-field'>
            <label>Upload Image</label>
            <input name='img' id='img' type='file' value='' size='40' accept='image/*'>
            <input name='img_old' type='hidden' value='<?php echo $item->image; ?>'>
        </div>
        <img src='<?php echo $img_link ?? ''; ?>' id='preview' width='100' height='100'>
        <p class='submit'>
            <input type='submit' name='submit' class='button button-primary' value='Update Member'>
            <span class='spinner'></span>
        </p>
    </form>
</div>

<script>
    document.querySelector('#img').addEventListener('change', function() {
        let src = URL.createObjectURL(this.files[0]);
        let perview = document.querySelector('#preview');
        perview.src = src;
        perview.style.display = 'block';
    });
</script>