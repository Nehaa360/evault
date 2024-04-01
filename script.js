// Implement the file upload logic here
const uploadFile = async () => {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
    });

    if (response.status === 200) {
        alert('File uploaded successfully!');
    } else {
        alert('File upload failed.');
    }
};

// Implement the code to list records here
const listRecords = async () => {
    const response = await fetch('/list');

    if (response.status === 200) {
        const records = await response.json();

        recordList.innerHTML = '';
        records.forEach((record) => {
            const listItem = document.createElement('li');
            listItem.textContent = record.title;
            listItem.addEventListener('click', () => {
                // Implement the code to view the record here
            });
            recordList.appendChild(listItem);
        });
    } else {
        alert('Failed to list records.');
    }
};

uploadButton.addEventListener('click', uploadFile);
listButton.addEventListener('click', listRecords);
