export function soletrar(palavra: string) {
  const letras = palavra.split("");

  letras.forEach((letra, index) => {
    const msg = new SpeechSynthesisUtterance(letra);
    msg.lang = "pt-BR";
    msg.rate = 0.7;

    setTimeout(() => {
      speechSynthesis.speak(msg);
    }, index * 600);
  });
}