import Card from "../components/card/Index";
import Header from "../components/header/Index";
import { falarSilabas } from "../utils/FalarSilabas";

export function PageSilabas() {
  const letras = [
    { l: "BA", texto: "Bá", imagem:"" },
    { l: "BE", texto: "Bê", imagem:"" },
    { l: "BI", texto: "Bí", imagem:"" },
    { l: "BO", texto: "Bó", imagem:"" },
    { l: "BU", texto: "Bú", imagem:"" },
    { l: "CA", texto: "Cá", imagem:"" },
    { l: "CE", texto: "Cê", imagem:"" },
    { l: "CI", texto: "Cí", imagem:"" },
    { l: "CO", texto: "Có", imagem:"" },
    { l: "CU", texto: "Cú", imagem:"" },
    { l: "DA", texto: "Dá", imagem:"" },
    { l: "DE", texto: "Dê", imagem:"" },
    { l: "DI", texto: "Dí", imagem:"" },
    { l: "DO", texto: "Dó", imagem:"" },
    { l: "DU", texto: "Dú", imagem:"" },
    { l: "FA", texto: "Fá", imagem:"" },
    { l: "FE", texto: "Fê", imagem:"" },
    { l: "FI", texto: "Fí", imagem:"" },
    { l: "FO", texto: "Fó", imagem:"" },
    { l: "FU", texto: "Fú", imagem:"" },
    { l: "GA", texto: "Gá", imagem:"" },
    { l: "GE", texto: "Gê", imagem:"" },
    { l: "GI", texto: "Gí", imagem:"" },
    { l: "GO", texto: "Gó", imagem:"" },
    { l: "GU", texto: "Gú", imagem:"" },
    { l: "LA", texto: "Lá", imagem:"" },
    { l: "LE", texto: "Lê", imagem:"" },
    { l: "LI", texto: "Lí", imagem:"" },
    { l: "LO", texto: "Ló", imagem:"" },
    { l: "LU", texto: "Lú", imagem:"" },
    { l: "MA", texto: "Má", imagem:"" },
    { l: "ME", texto: "Mê", imagem:"" },
    { l: "MI", texto: "Mí", imagem:"" },
    { l: "MO", texto: "Mó", imagem:"" },
    { l: "MU", texto: "Mú", imagem:"" },
    { l: "NA", texto: "Ná", imagem:"" },
    { l: "NE", texto: "Nê", imagem:"" },
    { l: "NI", texto: "Ní", imagem:"" },
    { l: "NO", texto: "Nó", imagem:"" },
    { l: "NU", texto: "Nú", imagem:"" },
    { l: "PA", texto: "Pá", imagem:"" },
    { l: "PE", texto: "Pê", imagem:"" },
    { l: "PI", texto: "Pí", imagem:"" },
    { l: "PO", texto: "Pó", imagem:"" },
    { l: "PU", texto: "Pú", imagem:"" },
    { l: "QUA", texto: "Quá", imagem:"" },
    { l: "QUE", texto: "Quê", imagem:"" },
    { l: "QUI", texto: "Quí", imagem:"" },
    { l: "RA", texto: "Rá", imagem:"" },
    { l: "RE", texto: "Rê", imagem:"" },
    { l: "RI", texto: "Rí", imagem:"" },
    { l: "RO", texto: "Ró", imagem:"" },
    { l: "RU", texto: "Rú", imagem:"" },
    { l: "SA", texto: "Sá", imagem:"" },
    { l: "SE", texto: "Sê", imagem:"" },
    { l: "SI", texto: "Sí", imagem:"" },
    { l: "SO", texto: "Só", imagem:"" },
    { l: "SU", texto: "Sú", imagem:"" },
    { l: "TA", texto: "Tá", imagem:"" },
    { l: "TE", texto: "Tê", imagem:"" },
    { l: "TI", texto: "Tí", imagem:"" },
    { l: "TO", texto: "Tó", imagem:"" },
    { l: "TU", texto: "Tú", imagem:"" },
    { l: "VA", texto: "Vá", imagem:"" },
    { l: "VE", texto: "Vê", imagem:"" },
    { l: "VI", texto: "Ví", imagem:"" },
    { l: "VO", texto: "Vó", imagem:"" },
    { l: "VU", texto: "Vú", imagem:"" },
    { l: "ZA", texto: "Zá", imagem:"" },
    { l: "ZE", texto: "Zê", imagem:"" },
    { l: "ZI", texto: "Zí", imagem:"" },
    { l: "ZO", texto: "Zó", imagem:"" },
    { l: "ZU", texto: "Zú", imagem:"" },
  ];

  return (
    <>
      <Header>Sílabas</Header>

      <div className="alert alert-info text-center fw-semibold">
        🌈 Vamos aprender as sílabas! Clique nas imagens e escute o som 🎵
      </div>

      <div className="row g-3 m-2">
        {letras.map((item) => (
          <div key={item.l} className="col-sm-6 col-md-4 col-lg-2">
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