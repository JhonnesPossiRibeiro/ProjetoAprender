import Header from "../components/header/Index";
import {falar} from "../utils/Falar";
import { falarSilabas } from "../utils/FalarSilabas";

export function PagePalavras (){
  return (
    <>
    <Header>Palavras</Header>
    <button onClick={() => falar("Abelha")}>Abelha</button>
    <button onClick={() => falarSilabas(["A","bê","lha"])}>A-be-lha</button>
    </>
  )
}