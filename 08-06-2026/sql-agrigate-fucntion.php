<?php

require_once 'db-config.php';

// $sql = "select count(*) fahim from results;"

// $sql = "select count(*) from students where address='Pakistan' ;"
// $sql = "select sum(score) as total_number from results;"
// $sql = "select sum(final score) as total_number from results WHERE exam_type = 'Final' ;"

//  $sql = "select full_name from students student_id, max(score) as max_number from results where exam_type = 'final';"

// $sql = select full_name, student_id, max(score) as max_number from students, results where exam_type = 'final' and student_id = results_id;


// $sql = "select students.full_name, results.student_id, max(results.score) as max_number from students, results where results.exam_type = 'final' and students.id = results.student_id;"

$sql= "select manufacturer.name, product.name, product.id, min(product.price) as Lowest_price where manufacturer.id = product.manufacture_id;"


INSERT INTO students (student_id, full_name, email, phone, address, is_active)
VALUES 
  ('Sarah Rahman', 's.rahman12@student.edu', '+880-1711-234567', '12/A, Dhanmondi, Dhaka', TRUE),
  ('Karim Hossain', 'karim.h@student.edu', '+880-1812-345678', '45, Banani, Dhaka', TRUE),
  ('Fatima Akhter', 'f.akhter@student.edu', '+880-1913-456789', '22/B, Gulshan, Dhaka', FALSE),
  ('Tanvir Ahmed', 'tanvir.a@student.edu', '+880-1523-567890', '89, Farmgate, Dhaka', TRUE),
  ('Anika Tasnim', 'anika.t@student.edu', '+880-1674-678901', '34, Mirpur, Dhaka', FALSE);

?>