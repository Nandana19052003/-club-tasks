const pollForm = document.querySelector('#poll form');
const pollResults = document.createElement('div');
pollForm.parentNode.insertBefore(pollResults, pollForm.nextSibling);

pollForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const selectedCharacter = document.querySelector('input[name="favorite-character"]:checked');
  if (selectedCharacter) {
    const characterName = selectedCharacter.value;
    const pollData = JSON.parse(localStorage.getItem('pollData')) || {};
    pollData[characterName] = (pollData[characterName] || 0) + 1;
    localStorage.setItem('pollData', JSON.stringify(pollData));
    displayPollResults(pollData);
  }
});

function displayPollResults(pollData) {
  pollResults.innerHTML = '';
  for (const characterName in pollData) {
    const voteCount = pollData[characterName];
    const votePercentage = ((voteCount / Object.values(pollData).reduce((a, b) => a + b)) * 100).toFixed(1);
    const resultRow = document.createElement('div');
    resultRow.classList.add('poll-result');
    resultRow.innerHTML = `
      <div class="poll-character-name">${characterName}</div>
      <div class="poll-vote-count">${voteCount} votes</div>
      <div class="poll-vote-percentage">${votePercentage}%</div>
    `;
    pollResults.appendChild(resultRow);
  }
}
