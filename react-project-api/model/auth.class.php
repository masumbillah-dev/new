<?php
class Auth
{
    public static function login($_email, $_password)
    {
        global $db;
        $sql = "SELECT * FROM users WHERE email = '$_email'";
        $result = $db->query($sql);
        if ($result) {
            $user = $result->fetch_assoc();

        if($user){
            if(password_verify($_password, $user['password'])){
                http_response_code(200);
                return[
                    "token" => generateJWT($user),
                    "user" => $user
                ];

            }else{
                http_response_code(401);
                return "password not matched.";
            }
        }else{
            http_response_code(401);
            return "user not found.";

        }


        } else {
            return $db->error;
        }
    }
}
