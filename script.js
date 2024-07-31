function toggleMode() {
    const html = document.documentElement;

    /* if(html.classList.contains('light')) {
        html.classList.remove('light');
    } else {
        html.classList.add('light');
    } */
    
    // simplificando o código acima
    html.classList.toggle('light');
}