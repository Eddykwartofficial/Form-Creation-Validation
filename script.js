// ========================================================================
// FORM VALIDATION SCRIPT - COMPLETE BEGINNER'S GUIDE
// ========================================================================

/*
WHAT IS DOMContentLoaded?
DOMContentLoaded is an event that fires when the HTML document has been 
completely loaded and parsed. This is important because we need to make 
sure all HTML elements exist before our JavaScript tries to access them.

Think of it like waiting for a house to be built before you try to 
install furniture inside it.
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM Content Loaded - Script is starting!');
    
    // ====================================================================
    // SETUP AND INITIAL CODE STRUCTURE
    // ====================================================================
    
    /*
    SELECTING FORM ELEMENTS:
    We use document.getElementById() to find specific HTML elements by their ID.
    It's like using a name tag to find a specific person in a crowd.
    
    We store these in constants (const) because we won't be changing 
    which elements we're referring to.
    */
    
    // Form Selection - Get the main form element
    const form = document.getElementById('registration-form');
    console.log('📋 Form selected:', form);
    
    // Feedback Division Selection - Get the div where we'll show messages
    const feedbackDiv = document.getElementById('form-feedback');
    console.log('💬 Feedback div selected:', feedbackDiv);
    
    /*
    ERROR CHECKING:
    It's good practice to check if elements exist before using them.
    This prevents errors if someone changes the HTML.
    */
    if (!form) {
        console.error('❌ Error: Form not found!');
        return;
    }
    
    if (!feedbackDiv) {
        console.error('❌ Error: Feedback div not found!');
        return;
    }
    
    // ====================================================================
    // FORM SUBMISSION AND EVENT PREVENTION
    // ====================================================================
    
    /*
    WHAT IS AN EVENT LISTENER?
    An event listener is like a security guard that watches for specific 
    actions (events) and responds when they happen. In this case, we're 
    watching for when someone tries to submit the form.
    
    The 'submit' event fires when:
    - User clicks the submit button
    - User presses Enter while focused on a form field
    */
    
    form.addEventListener('submit', function(event) {
        console.log('📤 Form submission attempted!');
        
        /*
        WHAT IS event.preventDefault()?
        Normally, when a form is submitted, the browser sends the data to 
        a server and refreshes the page. preventDefault() stops this from 
        happening so we can handle the validation ourselves first.
        
        Think of it like stopping a car before it goes through a toll booth
        so you can check if you have the right change.
        */
        event.preventDefault();
        console.log('🛑 Default form submission prevented - running validation...');
        
        // ================================================================
        // INPUT RETRIEVAL AND TRIMMING
        // ================================================================
        
        /*
        RETRIEVING USER INPUT:
        We get the value that users typed into each input field.
        The .value property contains whatever text is in the input field.
        
        WHAT IS .trim()?
        .trim() removes extra spaces from the beginning and end of text.
        For example: "  hello  " becomes "hello"
        This prevents users from submitting forms with just spaces.
        */
        
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        console.log('📝 Retrieved values:');
        console.log('   Username:', `"${username}"`);
        console.log('   Email:', `"${email}"`);
        console.log('   Password:', `"${password}" (length: ${password.length})`);
        
        // ================================================================
        // VALIDATION LOGIC
        // ================================================================
        
        /*
        VALIDATION STRATEGY:
        We use a boolean flag (isValid) to track whether all validations pass.
        We start by assuming everything is valid (true), then change it to 
        false if we find any problems.
        
        We also collect all error messages in an array so we can show 
        the user everything that's wrong at once.
        */
        
        // Initialize validation variables
        let isValid = true;
        let messages = [];
        
        console.log('🔍 Starting validation checks...');
        
        // ================================================================
        // USERNAME VALIDATION
        // ================================================================
        
        /*
        USERNAME REQUIREMENTS:
        - Must be at least 3 characters long
        - This prevents usernames like "a" or "ab" which are too short
        */
        
        console.log('👤 Checking username...');
        if (username.length < 3) {
            console.log('   ❌ Username too short');
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        } else {
            console.log('   ✅ Username valid');
        }
        
        // ================================================================
        // EMAIL VALIDATION
        // ================================================================
        
        /*
        EMAIL REQUIREMENTS:
        - Must contain both '@' and '.' characters
        - This is a basic check. A real email validation would be more complex.
        
        WHY BASIC VALIDATION?
        We're using simple string methods as requested. In real applications,
        you'd use more sophisticated email validation (regex or libraries).
        */
        
        console.log('📧 Checking email...');
        if (!email.includes('@') || !email.includes('.')) {
            console.log('   ❌ Email format invalid');
            isValid = false;
            messages.push('Email must contain both @ and . characters.');
        } else {
            console.log('   ✅ Email format valid');
        }
        
        // ================================================================
        // PASSWORD VALIDATION
        // ================================================================
        
        /*
        PASSWORD REQUIREMENTS:
        - Must be at least 8 characters long
        - This is a basic security measure. Longer passwords are generally safer.
        */
        
        console.log('🔒 Checking password...');
        if (password.length < 8) {
            console.log('   ❌ Password too short');
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        } else {
            console.log('   ✅ Password valid');
        }
        
        // ================================================================
        // DISPLAYING FEEDBACK
        // ================================================================
        
        /*
        SHOWING RESULTS TO USER:
        We always make the feedback div visible, then show either:
        - Success message (green text) if everything is valid
        - Error messages (red text) if anything is invalid
        */
        
        console.log('📱 Displaying feedback...');
        
        // Make feedback div visible
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            /*
            SUCCESS CASE:
            All validations passed, so we show a success message.
            We use green color (#28a745) to indicate success.
            */
            console.log('🎉 All validations passed!');
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color for success
            
            // In a real application, you would now send the data to a server
            console.log('✅ Ready to submit data to server');
            
        } else {
            /*
            ERROR CASE:
            Some validations failed, so we show all error messages.
            We use red color (#dc3545) to indicate errors.
            
            WHY innerHTML INSTEAD OF textContent?
            We want to display line breaks (<br>) between error messages.
            innerHTML interprets HTML tags, while textContent treats them as plain text.
            */
            console.log('❌ Validation failed with errors:', messages);
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
            
            console.log('🔧 User needs to fix errors before proceeding');
        }
        
        console.log('📋 Validation complete!');
    });
    
    console.log('🎯 Form validation script initialized successfully!');
});

// ========================================================================
// ADDITIONAL LEARNING NOTES FOR BEGINNERS
// ========================================================================

/*
KEY CONCEPTS YOU LEARNED:

1. DOM MANIPULATION:
   - document.getElementById() - Find elements by ID
   - .value - Get text from input fields
   - .textContent - Change text content safely
   - .innerHTML - Change content including HTML tags
   - .style.property - Change CSS styles

2. EVENT HANDLING:
   - addEventListener() - Listen for user actions
   - event.preventDefault() - Stop default browser behavior
   - 'DOMContentLoaded' - Wait for page to load
   - 'submit' - Detect form submission

3. STRING METHODS:
   - .trim() - Remove extra spaces
   - .includes() - Check if string contains text
   - .length - Get string length
   - .join() - Combine array elements into string

4. VALIDATION PATTERNS:
   - Boolean flags (isValid) to track overall status
   - Arrays to collect multiple error messages
   - Conditional logic to check requirements
   - User feedback with appropriate colors

5. DEBUGGING:
   - console.log() - Print information for debugging
   - console.error() - Print error messages
   - Descriptive variable names
   - Comments explaining complex logic

BEST PRACTICES DEMONSTRATED:
- Always wait for DOM to load before accessing elements
- Prevent default form submission for client-side validation
- Validate all fields and show all errors at once
- Use semantic colors (green for success, red for errors)
- Include detailed logging for debugging
- Check if elements exist before using them
- Use const for values that don't change
- Use let for values that might change

WHAT HAPPENS WHEN USER SUBMITS THE FORM:
1. Browser tries to submit form
2. Our event listener catches this attempt
3. preventDefault() stops the normal submission
4. We get all input values and clean them with trim()
5. We check each field against our requirements
6. We collect any error messages
7. We show either success or error feedback
8. User can fix errors and try again

This is a foundation for more advanced form validation techniques!
*/