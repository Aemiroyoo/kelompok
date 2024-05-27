<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>MPF-ANALOG-UMJ</title>
</head>

<body>
<?php include"inti/header.php"; ?>

<?php
error_reporting(0);

// Fetching and sanitizing the input parameters
$page = isset($_GET['page']) ? basename($_GET['page']) : 'home';
$action = isset($_GET['action']) ? basename($_GET['action']) : '';

// Defining the base directory for pages
$baseDir = 'page/';

// Determine the file to include
if ($action == "") {
    $file = $baseDir . $page . '.php';
} else {
    $file = $baseDir . $page . '-' . $action . '.php';
}

// Checking if the file exists before including
if (file_exists($file)) {
    include $file;
} else {
    include $baseDir . 'home.php'; // Fallback to the home page if the file doesn't exist
}
?>


<script type="module" src="js/main.js"></script>
<?php include"inti/footer.php";?>
</body>
</html>