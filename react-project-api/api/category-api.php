<?php
function getCategories()
{
    // echo "brand API";
    echo json_encode(Category::getAll());
}
?>