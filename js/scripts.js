window.onload = function() {
    const form = document.getElementById('select-form');
    const classtype = document.getElementById('classtype');
    const warriorStory = document.getElementById('warriorStory');
    const wizardStory = document.getElementById('wizardStory');
    const rogueStory = document.getElementById('rogueStory');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Hide all story paragraphs
        warriorStory.classList.add('hidden');
        wizardStory.classList.add('hidden');
        rogueStory.classList.add('hidden');

        // Determine which Class was selected
        const selectedOption = classtype.value;
        if (selectedOption === 'Warrior') {
            warriorStory.classList.remove('hidden');
        } else if (selectedOption === 'Wizard') {
            wizardStory.classList.remove('hidden');
        } else if (selectedOption === 'Rogue') {
            rogueStory.classList.remove('hidden');
        }
    });

    generateButton.addEventListener('click', function() {
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
    classSelectedSpan.textContent = classtype.value;
};

/* function reset() {
    document.getElementById
} */
