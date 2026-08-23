<?php

class Lead
{
    public $id;
    public $name;
    public $email;
    public $phone;
    public $company;
    public $subject;
    public $message;
    public $source;
    public $status;

    public function __construct(
        $_id = null,
        $_name = "",
        $_email = "",
        $_phone = "",
        $_company = "",
        $_subject = "",
        $_message = "",
        $_source = "Website",
        $_status = "New"
    ) {
        $this->id = $_id;
        $this->name = $_name;
        $this->email = $_email;
        $this->phone = $_phone;
        $this->company = $_company;
        $this->subject = $_subject;
        $this->message = $_message;
        $this->source = $_source;
        $this->status = $_status;
    }


    // Create Lead
    public function create()
    {
        global $db;

        $sql = "INSERT INTO leads
                (
                    name,
                    email,
                    phone,
                    company,
                    subject,
                    message,
                    source,
                    status
                )
                VALUES
                (
                    '$this->name',
                    '$this->email',
                    '$this->phone',
                    '$this->company',
                    '$this->subject',
                    '$this->message',
                    '$this->source',
                    '$this->status'
                )";

        $db->query($sql);

        return $db->error ? $db->error : true;
    }


    // Update Lead Status
    public function updateStatus()
    {
        global $db;

        $sql = "UPDATE leads
                SET status='$this->status'
                WHERE id='$this->id'";

        $db->query($sql);

        return $db->error ? $db->error : true;
    }

    // Update Full Lead
    public function update()
    {
        global $db;

        $sql = "UPDATE leads
            SET
                name='$this->name',
                email='$this->email',
                phone='$this->phone',
                company='$this->company',
                subject='$this->subject',
                message='$this->message'
            WHERE id='$this->id'";

        $db->query($sql);

        return $db->error ? $db->error : true;
    }


    // Get All Leads
    static public function readAll()
    {
        global $db;

        $result = $db->query(
            "SELECT *
             FROM leads
             ORDER BY id DESC"
        );

        return $result->fetch_all(MYSQLI_ASSOC);
    }


    // Get Single Lead
    static public function readById($_id)
    {
        global $db;

        $result = $db->query(
            "SELECT *
             FROM leads
             WHERE id='$_id'"
        );

        return $result->fetch_assoc();
    }


    // Delete Lead
    static public function delete($_id)
    {
        global $db;

        $db->query(
            "DELETE FROM leads
             WHERE id='$_id'"
        );

        return $db->error ? $db->error : true;
    }
}
