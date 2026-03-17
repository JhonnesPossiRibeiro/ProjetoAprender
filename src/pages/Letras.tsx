import Header from "../components/header/Index";
import {falar} from "../utils/Falar";

export function PageLetras() {
  const vozes = window.speechSynthesis.getVoices();

  vozes.forEach((v) => {
    console.log(v.name, v.lang);
  });
  return (
    <>
      <Header>Letras</Header>
      <button onClick={() => falar("A de Abelha")}>A a</button>
    </>
  );
}
