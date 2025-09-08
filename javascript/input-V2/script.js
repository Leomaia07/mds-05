const inpuName = document.getElementById("inputName");

inpuName.addEventListener("input", () => {
  const titleHello = document.getElementById("titleHello");
  titleHello.textContent = `Olá ${inpuName.value.trim()}`;
});
