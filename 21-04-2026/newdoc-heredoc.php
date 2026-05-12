<?php


$name = "Fahim";
echo <<<HEREDOC
    {$name} is a good boy. <p>Lorem ipsum, dolor sit amet consectetur   adipisicing elit. Rem cupiditate nisi, laudantium corrupti asperiores     esse aperiam in eaque ut blanditiis illo voluptatibus praesentium   corporis veritatis sunt quo libero! Sint, incidunt!</p>
HEREDOC;

?>


<?php



echo "==============================================="; 



$name = "Fahim";
echo <<<'NOWDOC'
    {$name} is a good boy. <p>Lorem ipsum, dolor sit amet consectetur   adipisicing elit. Rem cupiditate nisi, laudantium corrupti asperiores     esse aperiam in eaque ut blanditiis illo voluptatibus praesentium   corporis veritatis sunt quo libero! Sint, incidunt!</p>
NOWDOC;

?>


