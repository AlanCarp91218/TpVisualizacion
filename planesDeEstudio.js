document.getElementById('carreraSelect').addEventListener('change', function() {
    const perfiles = document.querySelectorAll('.perfil');
    perfiles.forEach(perfil => perfil.style.display = 'none');
    
    const selectedValue = this.value;
    if (selectedValue) {
        document.getElementById(selectedValue).style.display = 'block';
    }
});