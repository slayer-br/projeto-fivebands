/*
 * Seleciona todos os botões e bandas
 */

const buttons = document.querySelectorAll(".button");
const bands = document.querySelectorAll(".band");

/*
 * Remove a classe 'selected' do botão atualmente selecionado
 */
function unselectCurrentButton() {
  const currentSelectedButton = document.querySelector(".button.selected");
  if (currentSelectedButton) {
    currentSelectedButton.classList.remove("selected");
  }
}

/*
 * Remove a classe 'selected' da banda atualmente selecionado
 */
function unselectCurrentBand() {
  const currentSelectedBand = document.querySelector(".band.selected");

  if (currentSelectedBand) {
    currentSelectedBand.classList.remove("selected");
  }
}

/*
 * Adiciona a classe 'selected' ao botão clicado
 */
function selectButton(button) {
  button.classList.add("selected");
}

/*
 * Adiciona a classe 'selected' à banda correspondente
 */
function selectBand(index) {
  bands[index].classList.add("selected");
}

/*
 * Função que lida com o clique em um botão
 */
function handleButtonClick(button, index) {
  unselectCurrentButton();
  selectButton(button);

  unselectCurrentBand();
  selectBand(index);
}

/*
 * Adiciona os event listeners a todos os botões
 */
buttons.forEach((button, index) => {
  button.addEventListener("click", () => handleButtonClick(button, index));
});
