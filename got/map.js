const mapButton = document.getElementById('map-button');

mapButton.addEventListener('click', () => {
    // redirect to quartermaester.info
    window.location.href = 'https://quartermaester.info/';

    // alternatively, you can use the following code to open the map in a new tab:
    // window.open('https://quartermaester.info/');
});
