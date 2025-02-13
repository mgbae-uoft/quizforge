<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Template</title>
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
        <div class="subject_div" id = "q1">
            <div class="form_question">Submit your syllabus (pdf, html) or Skip</div>
            <div id="drop-area">
                <p>Drag & Drop files here or click to select files</p>
                <input type="file" id="file-input" accept=".pdf, .html" style="display: none;" />
                <button onclick="document.getElementById('file-input').click();">Select Files</button>
            </div>
            <div id="file-info"></div>
            <div id="action-buttons">
                <button id="previous-button" class = "form-button inactive">Previous</button>
                <span>
                    <button id="next-button" class = "form-button active">Next</button>
                    <button id="skip-button" class = "form-button active">Skip</button>
                </span>
                
            </div>
        </div>
        <div class="subject_div" id = "q2">
            <div class="form_question">Submit your syllabus (pdf, html) or Skip</div>
            <div id="drop-area">
                <p>Drag & Drop files here or click to select files</p>
                <input type="file" id="file-input" accept=".pdf, .html" style="display: none;" />
                <button onclick="document.getElementById('file-input').click();">Select Files</button>
            </div>
            <div id="file-info"></div>
            <div id="action-buttons">
                <button id="next-button">Next</button>
                <button id="skip-button">Skip</button>
            </div>
        </div>
    </main>
</body>
<script>
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('file-input');
    const fileInfo = document.getElementById('file-info');
    dropArea.addEventListener('dragover', function(event) {
        event.preventDefault();
        dropArea.classList.add('hover');
    });
    dropArea.addEventListener('dragleave', function(event) {
        dropArea.classList.remove('hover');
    });
    dropArea.addEventListener('drop', function(event) {
        event.preventDefault();
        dropArea.classList.remove('hover');
        handleFiles(event.dataTransfer.files);
    });
    fileInput.addEventListener('change', function(event) {
        handleFiles(event.target.files);
    });
    function handleFiles(files) {
        const file = files[0];
        if (!file) {
            alert('Please select a file.');
            return;
        }
        const allowedTypes = ['application/pdf', 'text/html'];
        if (!allowedTypes.includes(file.type)) {
            alert('Invalid file type. Please select a PDF or HTML file.');
            return;
        }
        fileInfo.textContent = `Selected file: ${file.name}`;
    }

    const nextbutton = document.getElementById('next-button');
    const skipbutton = document.getElementById('skip-button');
    nextbutton.addEventListener('click', function(event) {
        const file = fileInput.files[0]; // Get the selected file from the file input
        if (!file) {
            alert('No file selected. Please upload a valid file or click "Skip".');
            return;
        }

        const allowedTypes = ['application/pdf', 'text/plain', 'text/csv', 'text/html'];
        if (!allowedTypes.includes(file.type)) {
            alert('Invalid file type. Please select a PDF, TXT, CSV, or HTML file.');
            return;
        }

        // If valid file is selected
        alert(`Quizeforge AI will analyze ${file.name}!`);
    });
    skipbutton.addEventListener('click', function(event) {
        console.log("skip");
    });
</script>
</html>
