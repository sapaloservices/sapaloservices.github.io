function toggleAnswer(id) {
    const answer = document.getElementById(id);
    // Toggle the .hidden class on the answer
    answer.classList.toggle('hidden');
}

function toggleMoreFAQs() {
    const moreFaqs = document.getElementById('more-faqs');
    const button = document.querySelector('.faq-container > .button');
    
    // Toggle the .hidden class on the additional FAQs
    moreFaqs.classList.toggle('hidden');

    // Update the button text based on current state
    button.textContent = moreFaqs.classList.contains('hidden') ? 'Show More FAQs' : 'Show Less FAQs';
}

function toggleMoreFAQs() {
    const moreFaqs = document.getElementById('more-faqs');
    const button = document.querySelector('.faq-container > .button');
    console.log(moreFaqs); // Check if it's correctly selecting the element
    console.log(button); // Check if it's correctly selecting the button

    moreFaqs.classList.toggle('hidden');
    button.textContent = moreFaqs.classList.contains('hidden') ? 'Show More FAQs' : 'Show Less FAQs';
}

function toggleMoreFAQs() {
    var moreFaqs = document.getElementById('more-faqs');
    var button = document.querySelector('.faq-container > .button');
    moreFaqs.classList.toggle('hidden');
    
    if (moreFaqs.classList.contains('hidden')) {
        button.textContent = 'Show More';
    } else {
        button.textContent = 'Show Less';
    }
}
