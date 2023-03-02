const familyButton = document.getElementById("familybutton");
familyButton.addEventListener("click", showFamilyDropdown);

const familyDropdown = document.getElementById("family-dropdown");

familyButton.addEventListener("click", () => {
  familyButton.classList.toggle("clicked");
});

function showFamilyDropdown() {
  const familyDropdown = document.getElementById("family-dropdown");
  familyDropdown.style.display = "block";
}

familyDropdown.classList.add('family-dropdown');
familyButton.parentElement.appendChild(familyDropdown);

// Add family names to the dropdown
function showFamilies() {
  const familyList = document.createElement('div');
  familyList.id = 'family-list';

  const families = [
    'Stark',
    'Lannister',
    'Targaryen',
    'Baratheon',
    'Greyjoy',
    'Martell',
    'Tyrell',
    'Arryn',
    'Tully'
  ];

  families.forEach(family => {
    const familyLink = document.createElement('a');
    familyLink.textContent = family;
    familyLink.href = '#';
    familyLink.addEventListener('click', event => {
      event.preventDefault();
      displayCharactersByFamily(family);
    });
    familyList.appendChild(familyLink);
  });

  familyDropdown.appendChild(familyList);

}

showFamilies();

function displayCharactersByFamily(selectedFamily) {
  // assuming you have an array of characters with their corresponding families
  const characters = [
    { name: 'Arya Stark', family: 'Stark' },
    { name: 'Tyrion Lannister', family: 'Lannister' },
    { name: 'Daenerys Targaryen', family: 'Targaryen' },
    { name: 'Stannis Baratheon', family: 'Baratheon' },
    { name: 'Theon Greyjoy', family: 'Greyjoy' },
    { name: 'Oberyn Martell', family: 'Martell' },
    { name: 'Margaery Tyrell', family: 'Tyrell' },
    { name: 'Jon Arryn', family: 'Arryn' },
    { name: 'Catelyn Tully', family: 'Tully' },
    { name: 'Robb Stark', family: 'Stark' },
    { name: 'Cersei Lannister', family: 'Lannister' },
    { name: 'Viserys Targaryen', family: 'Targaryen' },
    { name: 'Renly Baratheon', family: 'Baratheon' },
    { name: 'Balon Greyjoy', family: 'Greyjoy' },
    { name: 'Doran Martell', family: 'Martell' },
    { name: 'Loras Tyrell', family: 'Tyrell' },
    { name: 'Robin Arryn', family: 'Arryn' },
    { name: 'Edmure Tully', family: 'Tully' },
  ];

  const characterList = document.getElementById('character-list');
  characterList.innerHTML = '';

  characters
    .filter(character => character.family === selectedFamily)
    .forEach(character => {
      const characterName = document.createElement('p');
      characterName.textContent = character.name;
      characterList.appendChild(characterName);
    });
}

familyButton.addEventListener('click', event => {
  event.preventDefault();
  familyDropdown.classList.toggle('show');
});
