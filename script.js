document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('lang');

    selectElement.addEventListener('change', function() {
        const selectedValue = this.value;
        if (selectedValue) {
            window.location.href = selectedValue; 
        }
    });
});

