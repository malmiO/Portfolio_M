const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(c => c.classList.remove('active'));

        const selected = document.getElementById(tab.dataset.tab);
        if (selected) selected.classList.add('active');
    });
});

tabs[0].click(); // Select the first tab by default


