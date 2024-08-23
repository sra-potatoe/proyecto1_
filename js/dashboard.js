const selectedProjects = JSON.parse(localStorage.getItem('selectedProjects'));
const selectedJustifications = JSON.parse(localStorage.getItem('selectedJustifications'));

const projectSelectionsCount = new Array(projects.length).fill(0);
selectedProjects.forEach(index => projectSelectionsCount[index] += 1);

for (let i = 0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * projects.length);
    projectSelectionsCount[randomIndex] += Math.floor(Math.random() * 10);
}

document.getElementById('selected-projects').innerHTML = selectedProjects.map(index => `
    <div class="selected-project">
        <strong>${projects[index]}</strong>
        <p>${selectedJustifications[index]}</p>
    </div>
`).join('');

const mostSelectedProjects = projectSelectionsCount
    .map((count, index) => ({ project: projects[index], count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

document.getElementById('most-selected-projects').innerHTML = mostSelectedProjects.map(p => `
    <div class="most-selected-project">
        <strong>${p.project}</strong>
        <p>Selected ${p.count} times</p>
    </div>
`).join('');

document.getElementById('back-to-selection').addEventListener('click', () => {
    window.location.href = 'project_selection.html';
});
