function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    
    // Alterna a classe 'collapsed' para a sidebar e conteúdo principal
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
}

function paraOTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}