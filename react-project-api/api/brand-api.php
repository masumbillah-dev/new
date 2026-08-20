<?php
function getBrands()
{
    // echo "brand API";
    echo json_encode(Brand::getAll());
}
?>