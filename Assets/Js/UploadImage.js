/*======================*\
# FILE UPLOADER UI
\*======================*/
// EXTERIOR
document.getElementById('file-upload-exterior').addEventListener('change', function() {
    var fileInput = document.getElementById('file-upload-exterior');
    var label = document.querySelector('#show-text-exterior');
    if (fileInput.files.length > 0) {
         label.textContent = fileInput.files[0].name;
    } else {
        label.textContent = 'Exterior text';
    }
});
// BEDROOM
document.getElementById('file-upload-bedroom').addEventListener('change', function() {
    var fileInput = document.getElementById('file-upload-bedroom');
    var label = document.querySelector('#show-text-bedroom');
    if (fileInput.files.length > 0) {
        label.textContent = fileInput.files[0].name;
    } else {
            label.textContent = 'Img here';
    }
});   
// BEDROOM
document.getElementById('file-upload-bathtoom').addEventListener('change', function() {
    var fileInput = document.getElementById('file-upload-bathtoom');
    var label = document.querySelector('#show-text-bathtoom');
    if (fileInput.files.length > 0) {
        label.textContent = fileInput.files[0].name;
    } else {
            label.textContent = 'Img here';
    }
});   
// BEDROOM
document.getElementById('file-upload-Livingroom').addEventListener('change', function() {
    var fileInput = document.getElementById('file-upload-Livingroom');
    var label = document.querySelector('#show-text-Livingroom');
    if (fileInput.files.length > 0) {
        label.textContent = fileInput.files[0].name;
    } else {
            label.textContent = 'Img here';
    }
});   
// DININGROOM
document.getElementById('file-upload-Diningroom').addEventListener('change', function() {
    var fileInput = document.getElementById('file-upload-Diningroom');
    var label = document.querySelector('#show-text-Diningroom');
    if (fileInput.files.length > 0) {
        label.textContent = fileInput.files[0].name;
    } else {
            label.textContent = 'Img here';
    }
});  