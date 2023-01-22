A Pokedex website can be created using HTML, CSS, JavaScript, and the PokeAPI. The following is a step-by-step guide on how to create such a website:

Step 1: Create an HTML file
Create an HTML file with the basic structure of your website. This file should include the head and body tags.

In the body, create a container element such as a div to hold the list of pokemons. This can be an unordered list (ul) or a table (table), depending on how you want to display the data.

Create an empty li or tr element for each pokemon, which will be populated with data later.

Step 2: Add CSS styling
Use CSS to style your website, giving it a visually appealing layout and making it easy to navigate.

You can use CSS to set the background color, font size, and other properties to make the website look good.

Step 3: Add JavaScript for data retrieval
In a separate JavaScript file, use the Fetch API to retrieve data from the PokeAPI. The API endpoint for retrieving a list of pokemons is https://pokeapi.co/api/v2/pokemon/

Use the fetch method to get the data from the API and then use JavaScript to parse the response and extract the information you need.

Step 4: Add the data to the HTML
Once you have the data, use JavaScript to add the pokemons to your HTML list or table.

You can use the innerHTML property to update the content of the li or tr elements.

Step 5: Add interactivity
To make the website more interactive and user-friendly, you can use JavaScript to add functionality such as filtering, pagination and also by clicking on each pokemon it should show more details about the pokemon.

Step 6: Host the website
Finally, you can use a web server to host your website, so that users can access it from a web browser.

Note: The above steps are just an approach, you can use other libraries like jQuery, React, Angular etc. too to make the website more interactive and efficient.

Also, PokeAPI has a usage limit for the number of requests you can make in a day, so make sure to use it efficiently and also to handle the error case when the limit exceeds.