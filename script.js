document.addEventListener('DOMContentLoaded', function() {

    const solarHeaders = document.querySelectorAll('.solar-header');
    
    solarHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
        
            item.classList.toggle('active');
            
        });
    });


    const submitFeedback = document.getElementById('submitFeedback');
    const feedbackText = document.getElementById('feedbackText');
    const successMessage = document.getElementById('successMessage');

    if (submitFeedback) {
        submitFeedback.addEventListener('click', () => {
            if (feedbackText.value.trim() !== "") {
                successMessage.style.display = 'block';
                feedbackText.value = "";
            } else {
                alert('Please enter some feedback first.');
            }
        });
    }
});
