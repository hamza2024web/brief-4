function showSection(sectionNumber) {
        document.querySelectorAll('.section').forEach(section => section.classList.add('d-none'));
        document.getElementById('section' + sectionNumber).classList.remove('d-none');
    }

    function nextSection(sectionNumber) {
        showSection(sectionNumber);
    }

    function prevSection(sectionNumber) {
        showSection(sectionNumber);
    }

    function submitForm(event) {
        event.preventDefault(); 
        alert("Form submitted successfully!");
        document.getElementById("multiSectionForm").reset();
        showSection(1); 
    }
