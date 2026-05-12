<?php

/* 
Create a class named student where fields are id, name, batch and one method result which will take id as parameter and search the corresponding result from a file and print result. Must use constructor to initialize the data and print a result . 
*/

class Student
{
    public $id;
    public $name;
    public $batch;
    private $file_path = "files/student.csv";

    public function searchStudent($_id)
    {
        $file = fopen($this->file_path, "r");

        $msg = "No student found";
        while ($student_row = fgetcsv($file)) {
            if ($_id == $student_row[0]) {
                $msg = "
                    ID: {$student_row[0]}<br>
                    Name: {$student_row[1]}<br>
                    Batch: {$student_row[2]}<br>
                ";
            }
        }

        fclose($file);
        return $msg;
    }

    public function showStudentList()
    {
        $file = fopen($this->file_path, "r");

        $table_rows_html = "";

        while ($student_row = fgetcsv($file)) {
            $table_rows_html .= "
            <tr>
                <td>{$student_row[0]}</td>
                <td>{$student_row[1]}</td>
                <td>{$student_row[2]}</td>
            </tr>
            ";
        }

        fclose($file);

        return $table_rows_html;
    }
    public function addStudentList($id, $name, $batch)
    {
        $file = fopen($this->file_path, "a+");
        fputcsv($file, [$id, $name, $batch]);
        fclose($file);

        return "
            <p style='color:green;'>Added new student           successfully</p>
            <p>
                ID: {$id}<br>
                Name: {$name}<br>
                Batch: {$batch}
            </p>";
    }
}

$student = new Student;
