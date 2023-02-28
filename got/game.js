const characterList = document.getElementById('character-list');

fetch('https://thronesapi.com/api/v2/Characters')
  .then(response => response.json())
  .then(data => {
    data.forEach(character => {
      const characterDiv = document.createElement('div');
      characterDiv.classList.add('character');

      const image = document.createElement('img');
      image.src = character.imageUrl; // set the src attribute to the character's image URL
      image.style.width = '150px'; // set the width of the image to 150 pixels
      image.style.height = '150px'; // set the height of the image to 150 pixels
      characterDiv.appendChild(image); // append the image element to the character div

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
  })
  .catch(error => console.error(error));
