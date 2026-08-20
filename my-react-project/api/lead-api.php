<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    exit;
}

require_once "../config/db.php";
require_once "../model/lead.class.php";

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {

    // Get all leads
    case "GET":

        if (isset($_GET["id"])) {

            $lead = Lead::readById($_GET["id"]);

            if ($lead) {
                echo json_encode([
                    "success" => true,
                    "data" => $lead
                ]);
            } else {
                echo json_encode([
                    "success" => false,
                    "message" => "Lead not found"
                ]);
            }

        } else {

            $leads = Lead::readAll();

            echo json_encode([
                "success" => true,
                "data" => $leads
            ]);
        }

        break;


    // Create new lead
    case "POST":

        $data = json_decode(
            file_get_contents("php://input"),
            true
        );

        if (
            empty($data["name"]) ||
            empty($data["email"])
        ) {
            echo json_encode([
                "success" => false,
                "message" => "Name and email are required"
            ]);

            exit;
        }

        $lead = new Lead(
            null,
            $data["name"],
            $data["email"],
            $data["phone"] ?? "",
            $data["company"] ?? "",
            $data["subject"] ?? "",
            $data["message"] ?? "",
            $data["source"] ?? "Website",
            $data["status"] ?? "New"
        );

        $result = $lead->create();

        if ($result === true) {

            echo json_encode([
                "success" => true,
                "message" => "Lead created successfully"
            ]);

        } else {

            echo json_encode([
                "success" => false,
                "message" => $result
            ]);
        }

        break;


    // Update lead status
   // Update Lead
case "PUT":

    $data = json_decode(
        file_get_contents("php://input"),
        true
    );

    if (empty($data["id"])) {

        echo json_encode([
            "success" => false,
            "message" => "Lead ID is required"
        ]);

        exit;
    }


    // Status only update
    if (
        isset($data["status"]) &&
        count($data) <= 2
    ) {

        $lead = new Lead(
            $data["id"],
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            $data["status"]
        );

        $result = $lead->updateStatus();

        if ($result === true) {

            echo json_encode([
                "success" => true,
                "message" => "Lead status updated successfully"
            ]);

        } else {

            echo json_encode([
                "success" => false,
                "message" => $result
            ]);
        }

        break;
    }


    // Full Lead update
    $lead = new Lead(
        $data["id"],
        $data["name"] ?? "",
        $data["email"] ?? "",
        $data["phone"] ?? "",
        $data["company"] ?? "",
        $data["subject"] ?? "",
        $data["message"] ?? "",
        $data["source"] ?? "Manual",
        $data["status"] ?? "New"
    );

    $result = $lead->update();

    if ($result === true) {

        echo json_encode([
            "success" => true,
            "message" => "Lead updated successfully"
        ]);

    } else {

        echo json_encode([
            "success" => false,
            "message" => $result
        ]);
    }

    break;


    // Delete lead
    case "DELETE":

        $data = json_decode(
            file_get_contents("php://input"),
            true
        );

        if (empty($data["id"])) {

            echo json_encode([
                "success" => false,
                "message" => "Lead ID is required"
            ]);

            exit;
        }

        $result = Lead::delete($data["id"]);

        if ($result === true) {

            echo json_encode([
                "success" => true,
                "message" => "Lead deleted successfully"
            ]);

        } else {

            echo json_encode([
                "success" => false,
                "message" => $result
            ]);
        }

        break;


    default:

        echo json_encode([
            "success" => false,
            "message" => "Method not allowed"
        ]);

        break;
}

?>