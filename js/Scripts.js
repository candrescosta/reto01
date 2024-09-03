function changePhoto() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = e => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.getElementById('photo').src = event.target.result;
            }
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function addExperience() {
    const experiencias = document.getElementById('experiencias');
    const newExperience = document.createElement('div');
    newExperience.className = 'experience-item';
    newExperience.innerHTML = `
        <h3 contenteditable="true">Puesto</h3>
        <p contenteditable="true">Empresa</p>
        <p contenteditable="true">Fecha de inicio - Fecha de fin</p>
        <p contenteditable="true">Descripción de responsabilidades...</p>
    `;
    experiencias.appendChild(newExperience);
}

function addEducation() {
    const estudios = document.getElementById('estudios');
    const newEducation = document.createElement('div');
    newEducation.className = 'education-item';
    newEducation.innerHTML = `
        <h3 contenteditable="true">Título</h3>
        <p contenteditable="true">Institución</p>
        <p contenteditable="true">Fecha de inicio - Fecha de fin</p>
    `;
    estudios.appendChild(newEducation);
}