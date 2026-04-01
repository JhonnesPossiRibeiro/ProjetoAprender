import Card from "../components/button/Index";
import Header from "../components/header/Index";
import { falarSilabas } from "../utils/FalarSilabas";

export function PageSilabas() {
  const letras = [
    { l: "BA", texto: "Bá", imagem:"" },
    { l: "BE", texto: "Bê", imagem:"" },
    { l: "BI", texto: "Bí", imagem:"" },
    { l: "BO", texto: "Bó", imagem:"" },
    { l: "BU", texto: "Bú", imagem:"" },
  ];

  return (
    <>
      <Header>Sílabas</Header>

      <div className="alert alert-info text-center fw-semibold">
        🌈 Vamos aprender as sílabas! Clique nas imagens e escute o som 🎵
      </div>

      <div className="row g-3 m-2">
        {letras.map((item) => (
          <div key={item.l} className="col-6 col-md-3 col-lg-2">
            <Card
              titulo={`${item.l} ${item.l.toLowerCase()}`}
              funcao={() => falarSilabas([item.texto])}
              img={item.imagem} // você pode trocar depois
            />
          </div>
        ))}
      </div>
    </>
  );
}