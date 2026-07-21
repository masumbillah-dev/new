<?php
if (isset($_POST['submit'])) {
    // echo 'hello';
    // echo $_POST['name'];
    // echo $_POST['designation'];
    // echo $_POST['email'];
    // echo "<pre>";
    // print_r($_FILES['img']);
    // echo "</pre>";
    if ($_FILES['img']['size'] > 0) {
        // Required WordPress files
        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/image.php';
        require_once ABSPATH . 'wp-admin/includes/media.php';

        // Upload to Media Library
        $attachment_id = media_handle_upload('img', 0);
    }

    global $wpdb;
    $table = $wpdb->prefix . 'team_members';
    $wpdb->insert(
        $wpdb->prefix . 'team_members',
        array(
            'name'          => $_POST['name'],
            'designation'   => $_POST['designation'],
            'email'         => $_POST['email'],
            'image'         => $attachment_id ?? null
        )
    );
    $insert_id = $wpdb->insert_id;
    if ($insert_id) {
        echo '<div class="notice notice-success is-dismissible">
            <p>Data inserted successfully.</p>
        </div>';
    } else {
        echo '<div class="notice notice-error is-dismissible">
            <p>Data not inserted.</p>
        </div>';
    }
}


?>

<div class='form-wrap'>
    <a href='admin.php?page=team-list' class='button button-primary'>Back to Member List</a>
    <h2>Add Team Member</h2>
    <form method='post' action='' class='validate' enctype='multipart/form-data'>
        <div class='form-field'>
            <label>Name</label>
            <input name='name' type='text' value='' size='40'>
        </div>
        <div class='form-field'>
            <label>Designation</label>
            <input name='designation' type='text' value='' size='40'>
        </div>
        <div class='form-field'>
            <label>Email</label>
            <input name='email' type='text' value='' size='40'>
        </div>
        <div class='form-field'>
            <label>Upload Image</label>
            <input name='img' id='img' type='file' value='' size='40' accept='image/*'>
        </div>
        <img src='' id='preview' style='display: none;' width='100' height='100' alt='Uploaded Image'>
        <p class='submit'>
            <input type='submit' name='submit' class='button button-primary' value='Add Member'>
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