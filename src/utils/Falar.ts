export function falar(texto: string) {
  const synth = window.speechSynthesis;

  const falarAgora = () => {
    const vozes = synth.getVoices();

    // tenta achar uma voz pt-BR
    const voz =
      vozes.find(v => v.lang === "pt-BR") ||
      vozes.find(v => v.lang.includes("pt"));

    const utterance = new SpeechSynthesisUtterance(texto);

    if (voz) utterance.voice = voz;

    utterance.lang = "pt-BR";
    utterance.rate = 0.8;

    synth.speak(utterance);
  };

  // resolve problema de vozes não carregadas
  if (synth.getVoices().length === 0) {
    synth.onvoiceschanged = falarAgora;
  } else {
    falarAgora();
  }
}