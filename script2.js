document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-search');
    const searchForm = document.getElementById('search-form');

    toggleButton.addEventListener('click', function() {
        searchForm.classList.toggle('hidden'); 
    });

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const searchTerm = document.getElementById('search-input').value;
        console.log('Поиск:', searchTerm); 
    });
});
