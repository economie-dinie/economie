// pegamos o valor no localStorage
const nightModeStorage = localStorage.getItem('gmtNightMode')
const nightMode = document.querySelector('#night-mode')
const lightModeStorage = localStorage.getItem('gmtlightMode')
const lightMode = document.querySelector('#light-mode')

// caso tenha o valor no localStorage
if (nightModeStorage) {
  // ativa o night mode
  document.documentElement.classList.add('night-mode')

  // já deixa o input marcado como ativo
  lightMode.checked = false


  // já deixa o input marcado como ativo
  nightMode.checked = true
}

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.add('night-mode')

  // se tiver a classe night-mode
  if (document.documentElement.classList.contains('night-mode')) {
    // salva o tema no localStorage
    localStorage.setItem('gmtNightMode', true)
    return
  }
  // senão remove
  localStorage.removeItem('gmtNightMode')
})



// ao clicar mudaremos as cores
lightMode.addEventListener('click', () => {
  // remove a classe `night-mode` do html
  document.documentElement.classList.remove('night-mode')

  // se não tiver a classe night-mode
  if ( ! document.documentElement.classList.contains('night-mode')) {
    // remove o tema escuro no localStorage
    localStorage.removeItem('gmtNightMode', true)
    // salva o tema claro no localStorage
    localStorage.setItem('gmtlightMode', true)
    return
  }
  // senão remove
  localStorage.removeItem('gmtlightMode')
})