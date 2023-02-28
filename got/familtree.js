const familyTreeButton = document.getElementById('family-button'); // updated
const familyTreeModal = document.getElementById('family-tree-modal');
const familyTreeCloseButton = document.getElementById('family-tree-close-button');

familyTreeButton.addEventListener('click', () => {
  familyTreeModal.style.display = 'block';
});

familyTreeCloseButton.addEventListener('click', () => {
  familyTreeModal.style.display = 'none';
});

const showMoreButton = document.createElement('button');
showMoreButton.innerText = 'Show more';
familyTreeModal.appendChild(showMoreButton);

const familiesList = document.createElement('ul');
familiesList.classList.add('families-list');
familyTreeModal.appendChild(familiesList);

const lannisters = document.createElement('li');
lannisters.innerText = 'Lannisters';
familiesList.appendChild(lannisters);

const starks = document.createElement('li');
starks.innerText = 'Starks';
familiesList.appendChild(starks);

const tyrells = document.createElement('li');
tyrells.innerText = 'Tyrells';
familiesList.appendChild(tyrells);

const targaryans = document.createElement('li');
targaryans.innerText = 'Targaryans';
familiesList.appendChild(targaryans);

showMoreButton.addEventListener('click', () => {
  lannisters.style.display = 'block';
  starks.style.display = 'block';
  tyrells.style.display = 'block';
  targaryans.style.display = 'block';
  showMoreButton.style.display = 'none';
});
