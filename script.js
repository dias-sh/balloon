document.addEventListener('DOMContentLoaded', () => {
    const words = ["С", "днём", "рождения", "Алтоша", "!", "Пусть", "сбываются", "все", "твои", "желания"];

    for (let i = 1; i <= 10; i++) {
        const balloon = document.getElementById('balloon' + i);
        balloon.addEventListener('click', function() {
            // Create the 'bang' effect
            const bang = document.createElement('div');
            bang.classList.add('bang');
            bang.innerText = 'Bang!';
            bang.style.display = 'block'; // Show the bang effect
            this.parentNode.insertBefore(bang, this.nextSibling);

            // Hide the balloon
            this.style.opacity = '0';

            // Display the word after a short delay
            setTimeout(() => {
                bang.style.display = 'none'; // Hide the bang effect
                const textElement = document.createElement('div');
                textElement.innerText = words[i - 1];
                textElement.style.textAlign = 'center';
                textElement.style.marginTop = '10px';
                bang.parentNode.insertBefore(textElement, bang.nextSibling);
            }, 500); // Adjust time as needed
            
            // Disable further clicks on this balloon
            this.style.pointerEvents = 'none';
        });
    }
});
