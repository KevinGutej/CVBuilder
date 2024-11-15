const form = document.getElementById('cvBuilderForm');
const previewArea = document.getElementById('cvPreviewArea');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const residence = document.getElementById('residence').value;
    const bio = document.getElementById('bio').value;
    const abilities = document.getElementById('abilities').value.split(',').map(skill => skill.trim());
    const jobHistory = document.getElementById('jobHistory').value.split(',').map(job => job.trim());
    const educationDetails = document.getElementById('educationDetails').value.split(',').map(edu => edu.trim());
    const cvContent = `
        <h2>${fullName}</h2>
        <p><strong>Email:</strong> ${emailAddress}</p>
        <p><strong>Phone:</strong> ${contactNumber}</p>
        <p><strong>Address:</strong> ${residence}</p>
        <hr>
        <h3>About Me</h3>
        <p>${bio}</p>
        <hr>
        <h3>Skills</h3>
        <ul>${abilities.map(skill => `<li>${skill}</li>`).join('')}</ul>
        <hr>
        <h3>Work Experience</h3>
        <ul>${jobHistory.map(job => `<li>${job}</li>`).join('')}</ul>
        <hr>
        <h3>Education</h3>
        <ul>${educationDetails.map(edu => `<li>${edu}</li>`).join('')}</ul>
    `;
    previewArea.innerHTML = cvContent;
});
