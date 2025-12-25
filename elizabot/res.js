const sendChatBtn = document.querySelector(".input-container span");
//const sendChatBtn = document.querySelector(".chat-input span");
const messageInput = document.querySelector('input[name="e_input"]');
messageInput.addEventListener('keypress', handleKeyPress);

// Function to search videos on YouTube
async function searchVideos(query) {
    const apiKey = 'your api key here'; // Replace with your YouTube Data API v3 key
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error searching videos:', error);
        return [];
    }
}

// Function to search on Google Custom Search
async function search(query) {
    var apiKey = 'your api key here'; // Replace with your Custom Search API key
    var cx = 'your custom search engine id here'; // Replace with your Custom Search Engine ID
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error searching:', error);
        return [];
    }
}

// Function to display search results in the chat interface
function displaySearchResults(results) {
    const messageDisplay = document.querySelector('textarea[name="e_display"]');
    if (results.length === 0) {
        messageDisplay.value += "No search results found.\n";
    } else {
        results.forEach(result => {
            const title = result.title;
            const snippet = result.snippet;
            const link = result.link;

            messageDisplay.value += `Title: ${title}\nSnippet: ${snippet}\nLink: ${link}\n\n`;
        });
    }
}

// Function to handle the keypress event
async function handleKeyPress(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevent form submission
        const messageInput = document.querySelector('input[name="e_input"]');
        const query = messageInput.value.trim();
        if (query) {
            // Call the search functions and display the results
            const searchResults = await search(query);
            const videoResults = await searchVideos(query);
            displaySearchResults(searchResults);
            displayVideoResults(videoResults);
        }
    }
}
async function search(query) {
    const cx = '66c82273bb2e84059';
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${cx}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return { items: [], error: error.message || 'Unknown error occurred' };
    }
  }

  function displayBotMessage(message, targetElement) {
    targetElement.innerHTML = message;
  }

  function displaySearchResults(results) {
    const blueSection = document.querySelector('.blue-section');
    blueSection.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
      blueSection.innerHTML = "<p>No results found.</p>";
    } else {
      results.forEach(result => {
        const title = result.title;
        const snippet = result.snippet;
        const link = result.link;

        const resultElement = document.createElement('div');
        resultElement.classList.add('search-result');
        resultElement.innerHTML = `<h3><a href="${link}" target="_blank">${title}</a></h3>
                                    <p>${snippet}</p>`;
        blueSection.appendChild(resultElement);
      });
    }
  }

// Get the input field and attach the event listener


sendChatBtn.addEventListener("click",search);