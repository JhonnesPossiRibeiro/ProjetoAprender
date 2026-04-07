export function falarSilabas(silabas: string[]) {
  const synth = window.speechSynthesis;

  synth.cancel();

  const vozes = synth.getVoices();
  const voz =
    vozes.find((v) => v.lang === "pt-BR") ||
    vozes.find((v) => v.lang.includes("pt"));

  let index = 0;

  function falarProxima() {
    if (index >= silabas.length) return;

    // 🔥 força pronúncia correta
    const texto = ajustarPronuncia(silabas[index]);

    const msg = new SpeechSynthesisUtterance(texto);

    if (voz) msg.voice = voz;

    msg.lang = "pt-BR";
    msg.rate = 0.6;
    msg.pitch = 1.2;

    msg.onend = () => {
      index++;
      falarProxima();
    };

    synth.speak(msg);
  }

  falarProxima();
}

function ajustarPronuncia(s: string) {
  const mapa: Record<string, string> = {
    BA: "bá",
    BE: "bê",
    BI: "bí",
    BO: "bó",
    BU: "bú",

    CA: "cá",
    CE: "cê",
    CI: "cí",
    CO: "có",
    CU: "cú",

    DA: "dá",
    DE: "dê",
    DI: "dí",
    DO: "dó",
    DU: "dú",
  };

  return mapa[s.toUpperCase()] || s;
}