/* Set up event listener for form submissions */
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Do something with the form data here, like sending it to a server with an AJAX request
    console.log(formData);
  });
});

/* Set up event listener for navigation menu toggle */
const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// We can use this code to retrieve issue data from a database or API
const issues = [
  { id: 1, title: 'Cannot login to the student portal', status: 'Resolved' },
  { id: 2, title: 'Grade calculation error', status: 'Pending' },
  { id: 3, title: 'Cannot access the course material', status: 'Open' },
];

// Select the table body element
const tbody = document.querySelector('tbody');

// Loop through the issue data and create table rows
for (const issue of issues) {
  const tr = document.createElement('tr');
  const tdId = document.createElement('td');
  const tdTitle = document.createElement('td');
  const tdStatus = document.createElement('td');

  tdId.textContent = issue.id;
  tdTitle.textContent = issue.title;
  tdStatus.textContent = issue.status;

  tr.appendChild(tdId);
  tr.appendChild(tdTitle);
  tr.appendChild(tdStatus);

  tbody.appendChild(tr);
}
