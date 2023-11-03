document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('select-form');
    const classtype = document.getElementById('classtype');
    const warriorStory = document.getElementById('warriorStory');
    const wizardStory = document.getElementById('wizardStory');
    const rogueStory = document.getElementById('rogueStory');
    
    const successParagraph = document.getElementById('successParagraph');
    const failureParagraph = document.getElementById('failureParagraph');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const generateButton = document.getElementById('generateButton');
        // Hide all story paragraphs
        warriorStory.classList.add('hidden');
        wizardStory.classList.add('hidden');
        rogueStory.classList.add('hidden');

        // Determine which Class was selected
        const selectedOption = classtype.options[classtype.selectedIndex].value;
        if (selectedOption === 'Warrior') {
            warriorStory.classList.remove('hidden');
        } else if (selectedOption === 'Wizard') {
            wizardStory.classList.remove('hidden');
        } else if (selectedOption === 'Rogue') {
            rogueStory.classList.remove('hidden');
        }

        // Update the success and failure paragraphs with the selected class
        document.getElementById('successClassSpan').textContent = selectedOption;
        document.getElementById('failureClassSpan').textContent = selectedOption;
        
    });

    generateButton.addEventListener('click', function(event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * 20) + 1;

        // Show the appropriate result paragraph based on the random number
        if (randomNumber > 12) {
            successParagraph.classList.remove('hidden');
            failureParagraph.classList.add('hidden');
        } else {
            successParagraph.classList.add('hidden');
            failureParagraph.classList.remove('hidden');
        }
    });
});


/* function reset() {
    document.getElementById
} */
