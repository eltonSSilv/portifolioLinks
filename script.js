function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector('#profile img')

  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }


/* VERSÃO SIMPLIFICADA DO CODIGO ACIMA(AMBOS FAZEM A MESMA FUNÇÃO)
html.classList.toggle('light')
*/

//MUDANDO A IMAGEM 
if(html.classList.contains('light')) {
  img.setAttribute("src", "./assets/assets/avatar-elton-light.jpeg")
} else { 
  img.setAttribute("src", "./assets/assets/avatar elton.jpeg")
}


}