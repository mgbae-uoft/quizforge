<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QuizForge</title>
    <link rel="stylesheet" href="styles.css?<?php echo time();?>">
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css'>
</head>
<body>
    <header>
        <span class = "menu">
            <i class="fi fi-br-menu-burger"></i>
        </span>
        <span class = "logo">
            <img src = "images/logo.png"><h1>QUIZFORGE</h1>
        </span>
        <span class = "noti">
            <i class="fi fi-br-bell"></i>
            <i class="fi fi-br-circle-user"></i>
        </span>
    </header>
    <main>
        <div class = "main_div">
            <a class = "main_icon" href = "addsubject.php">
                <img src = "images/bookmark.png">
                <h3>Add Subject</h3>
            </a>
            <a class = "main_icon">
                <img src = "images/note.png">
                <h3>Manage Tests</h3>
            </a>
            <a class = "main_icon">
                <img src = "images/calendar.png">
                <h3>Schedule</h3>
            </a>
            <a class = "main_icon">
                <img src = "images/file.png">
                <h3>Files</h3>
            </a>
            <a class = "main_icon">
                <img src = "images/message.png">
                <h3>Virtual Office Hour</h3>
            </a>
        </div>
    </main>
</body>
</html>
