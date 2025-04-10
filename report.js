document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('issueType', document.getElementById('issueType').value);
    formData.append('lga', document.getElementById('lga').value);
    formData.append('evidence', document.getElementById('evidence').files[0]);
    
    // Send to backend
    fetch('/api/reports', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if(response.ok) {
            alert('Report submitted successfully!');
            document.getElementById('reportForm').reset();
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
