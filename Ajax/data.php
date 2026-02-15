 <?php
if(isset($_GET["UserName"])) {
    $name = htmlspecialchars($_GET["UserName"]);
    echo "Hi " . $name . " are you okay?";
} else {
    echo "No name provided.";
}
?>
