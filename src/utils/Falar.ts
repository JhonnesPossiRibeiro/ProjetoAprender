export function falar(texto: string) {
  const msg = new SpeechSynthesisUtterance(texto);

  const vozes = window.speechSynthesis.getVoices();

  const voz = vozes.find((v) =>
    v.name.includes("Daniel")
  );

  if (voz) msg.voice = voz;

  msg.lang = "pt-BR";
  msg.rate = 0.8;

  speechSynthesis.speak(msg);
}

