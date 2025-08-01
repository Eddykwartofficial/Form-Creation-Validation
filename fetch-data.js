// Step 1: Initialize the Async Function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Step 3: Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
    
    // Step 4: Fetch Data Using try-catch
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Convert response to JSON
        const users = await response.json();
        
        // Step 5: Clear the Loading Message
        dataContainer.innerHTML = '';
        
        // Step 6: Create and Append User List
        const userList = document.createElement('ul');
        
        // Loop through users array and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the data container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Step 7: Error Handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        
        // Optional: Log the error for debugging purposes
        console.error('Error fetching user data:', error);
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);