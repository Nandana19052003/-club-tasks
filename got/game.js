const characterList = document.getElementById('character-list');
const searchInput = document.querySelector('input[type="text"]');

let characters = [];

fetch('https://thronesapi.com/api/v2/Characters')
  .then(response => response.json())
  .then(data => {
    characters = data;

    displayCharacters(characters);
  })
  .catch(error => console.error(error));

function displayCharacters(characters) {
  characterList.innerHTML = '';

  characters.forEach(character => {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character');

    const image = document.createElement('img');
    image.src = character.imageUrl;
    image.style.width = '250px';
    image.style.height = '250px';
    characterDiv.appendChild(image);

    const nameHeader = document.createElement('h2');
    nameHeader.textContent = character.fullName;

    const idParagraph = document.createElement('p');
    idParagraph.textContent = `ID: ${character.id}`;

    const firstNameParagraph = document.createElement('p');
    firstNameParagraph.textContent = `First Name: ${character.firstName}`;

    const lastNameParagraph = document.createElement('p');
    lastNameParagraph.textContent = `Last Name: ${character.lastName}`;

    const fullNameParagraph = document.createElement('p');
    fullNameParagraph.textContent = `Full Name: ${character.fullName}`;

    const titleParagraph = document.createElement('p');
    titleParagraph.textContent = `Title: ${character.title}`;

    characterDiv.appendChild(nameHeader);
    characterDiv.appendChild(idParagraph);
    characterDiv.appendChild(firstNameParagraph);
    characterDiv.appendChild(lastNameParagraph);
    characterDiv.appendChild(fullNameParagraph);
    characterDiv.appendChild(titleParagraph);

    characterList.appendChild(characterDiv);
  });
}

searchInput.addEventListener('input', event => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredCharacters = characters.filter(character =>
    character.fullName.toLowerCase().includes(searchTerm)
  );

  displayCharacters(filteredCharacters);
});


const charactersWithChildren = characters.reduce((acc, character) => {
  const { id, parentId, fullName } = character;
  if (parentId === null) {
    acc[fullName] = { ...character, children: [] };
  } else {
    const parent = acc[characters.find(c => c.id === parentId).fullName];
    if (parent) {
      parent.children.push(character);
    }
  }
  return acc;
}, {});


function createCharacterElement(character) {
  const element = document.createElement('div');
  element.classList.add('character');
  const image = document.createElement('img');
  image.src = character.imageUrl;
  image.style.width = '150px';
  image.style.height = '150px';
  element.appendChild(image);
  const name = document.createElement('h2');
  name.textContent = character.fullName;
  element.appendChild(name);
  const children = document.createElement('div');
  children.classList.add('children');
  character.children.forEach(child => {
    children.appendChild(createCharacterElement(child));
  });
  element.appendChild(children);
  return element;
}


function createFamilyTreeElement(charactersWithChildren) {
  const element = document.createElement('div');
  element.classList.add('family-tree');
  Object.values(charactersWithChildren).forEach(character => {
    if (character.parentId === null) {
      element.appendChild(createCharacterElement(character));
    }
  });
  return element;
}


const familyTreeElement = createFamilyTreeElement(charactersWithChildren);
document.body.appendChild(familyTreeElement);
