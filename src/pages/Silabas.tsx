import Header from "../components/header/Index";
import { falarSilabas } from "../utils/FalarSilabas";

export function PageSilabas (){
  return (
    <>
    <Header>Sílabas</Header>
    <button onClick={() => falarSilabas(["Bá"])}>BA</button>
    </>
  )
}