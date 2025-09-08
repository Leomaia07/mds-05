function ola() {
    const inpuName = document.getElementById('inputName');
    const titleHello = document.getElementById('titleHello');
    titleHello.textContent = `Olá ${inpuName.value.trim()}`;
}