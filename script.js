// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Main Navigation Tab Switching ---
    // This function handles the logic for the main navigation tabs at the top of the page.

    const navTabs = document.querySelectorAll('.nav-tab');
    const pages = document.querySelectorAll('.page');

    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const pageId = tab.dataset.page; // Get the target page ID from the 'data-page' attribute

            // Remove 'active' class from all tabs and pages
            navTabs.forEach(t => t.classList.remove('active'));
            pages.forEach(p => p.classList.remove('active'));

            // Add 'active' class to the clicked tab and the corresponding page
            tab.classList.add('active');
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        });
    });


    // --- 2. AI Resume Coach Modal ---
    // This handles opening and closing the modal for the AI Resume Coach.

    const modal = document.getElementById('resume-modal');
    const openModalButtons = document.querySelectorAll('.ai-resume-btn');
    const closeModalButtons = document.querySelectorAll('.close-btn, .close-modal-btn');

    // Event listeners to open the modal
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    // Event listeners to close the modal
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    // Close the modal if the user clicks on the background overlay
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });


    // --- 3. Leaderboard Tab Switching (for all leaderboards) ---
    // This makes the 'GLOBAL' and 'SG' tabs on the leaderboard components work.

    const leaderboardCards = document.querySelectorAll('.leaderboard-card, .leaderboard-global');
    
    leaderboardCards.forEach(card => {
        const lbTabs = card.querySelectorAll('.lb-tab');
        lbTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove 'active' from sibling tabs
                lbTabs.forEach(sibling => sibling.classList.remove('active'));
                // Add 'active' to the clicked tab
                tab.classList.add('active');
                // Note: In a real application, you would also fetch and display
                // the data for the selected tab (e.g., global vs. SG data).
            });
        });
    });

    // --- 4. Dynamic Progress Circle on Challenges Page ---
    // This reads the progress value from the HTML and updates the circle graphic.

    const circleProgress = document.querySelector('.circle-progress');
    if (circleProgress) {
        const progress = circleProgress.dataset.progress; // Get progress from 'data-progress' attribute
        const progressText = circleProgress.querySelector('.progress-text');
        
        if (progress) {
            const angle = (progress / 100) * 360;
            circleProgress.style.background = `conic-gradient(#1e3a8a 0deg ${angle}deg, #e0e0e0 ${angle}deg 360deg)`;
            if (progressText) {
                progressText.textContent = `${progress}%`;
            }
        }
    }
});
