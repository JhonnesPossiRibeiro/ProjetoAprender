export function falarSilabas(silabas: string[]) {
  silabas.forEach((silaba, index) => {
    const msg = new SpeechSynthesisUtterance(silaba);
    const vozes = window.speechSynthesis.getVoices();

    const voz = vozes.find((v) => v.name.includes("Maria"));
    if (voz) msg.voice = voz;

    msg.lang = "pt-BR";
    msg.rate = 0.7;

    setTimeout(() => {
      speechSynthesis.speak(msg);
    }, index * 600);
  });
}
