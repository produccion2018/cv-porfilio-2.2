function showSection(id) {
  // Ocultamos todas las secciones
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.style.display = 'none');

  // Ocultamos el contenido por defecto
  const defaultView = document.getElementById('defaultContent');
  if (defaultView) defaultView.style.display = 'none';

  // Mostramos la sección seleccionada
  const active = document.getElementById(id);
  if (active) active.style.display = 'block';
}

// Mostrar por defecto al cargar
window.onload = () => {
  showSection('developer');
};