import Card from "../components/card/Index";
import Header from "../components/header/Index";
import { falarSilabas } from "../utils/FalarSilabas";

export function PageSilabas() {
  const letras = [
    { familia: "B", l: "BA", texto: "Bá", imagem:"" },
    { familia: "B", l: "BE", texto: "Bê", imagem:"" },
    { familia: "B", l: "BI", texto: "Bí", imagem:"" },
    { familia: "B", l: "BO", texto: "Bó", imagem:"" },
    { familia: "B", l: "BU", texto: "Bú", imagem:"" },
    { familia: "C", l: "CA", texto: "Cá", imagem:"" },
    { familia: "C", l: "CE", texto: "Cê", imagem:"" },
    { familia: "C", l: "CI", texto: "Cí", imagem:"" },
    { familia: "C", l: "CO", texto: "Có", imagem:"" },
    { familia: "C", l: "CU", texto: "Cú", imagem:"" },
    { familia: "D", l: "DA", texto: "Dá", imagem:"" },
    { familia: "D", l: "DE", texto: "Dê", imagem:"" },
    { familia: "D", l: "DI", texto: "Dí", imagem:"" },
    { familia: "D", l: "DO", texto: "Dó", imagem:"" },
    { familia: "D", l: "DU", texto: "Dú", imagem:"" },
    { familia: "F",  l: "FA", texto: "Fá", imagem:"" },
    { familia: "F",  l: "FE", texto: "Fê", imagem:"" },
    { familia: "F",  l: "FI", texto: "Fí", imagem:"" },
    { familia: "F",  l: "FO", texto: "Fó", imagem:"" },
    { familia: "F",  l: "FU", texto: "Fú", imagem:"" },
    { familia: "G",  l: "GA", texto: "Gá", imagem:"" },
    { familia: "G",  l: "GE", texto: "Gê", imagem:"" },
    { familia: "G",  l: "GI", texto: "Gí", imagem:"" },
    { familia: "G",  l: "GO", texto: "Gó", imagem:"" },
    { familia: "G",  l: "GU", texto: "Gú", imagem:"" },
    { familia: "L",  l: "LA", texto: "Lá", imagem:"" },
    { familia: "L",  l: "LE", texto: "Lê", imagem:"" },
    { familia: "L",  l: "LI", texto: "Lí", imagem:"" },
    { familia: "L",  l: "LO", texto: "Ló", imagem:"" },
    { familia: "L",  l: "LU", texto: "Lú", imagem:"" },
    { familia: "M",  l: "MA", texto: "Má", imagem:"" },
    { familia: "M",  l: "ME", texto: "Mê", imagem:"" },
    { familia: "M",  l: "MI", texto: "Mí", imagem:"" },
    { familia: "M",  l: "MO", texto: "Mó", imagem:"" },
    { familia: "M",  l: "MU", texto: "Mú", imagem:"" },
    { familia: "N",  l: "NA", texto: "Ná", imagem:"" },
    { familia: "N",  l: "NE", texto: "Nê", imagem:"" },
    { familia: "N",  l: "NI", texto: "Ní", imagem:"" },
    { familia: "N",  l: "NO", texto: "Nó", imagem:"" },
    { familia: "N",  l: "NU", texto: "Nú", imagem:"" },
    { familia: "P",  l: "PA", texto: "Pá", imagem:"" },
    { familia: "P",  l: "PE", texto: "Pê", imagem:"" },
    { familia: "P",  l: "PI", texto: "Pí", imagem:"" },
    { familia: "P",  l: "PO", texto: "Pó", imagem:"" },
    { familia: "P",  l: "PU", texto: "Pú", imagem:"" },
    { familia: "Q",  l: "QUA", texto: "Quá", imagem:"" },
    { familia: "Q",  l: "QUE", texto: "Quê", imagem:"" },
    { familia: "Q",  l: "QUI", texto: "Quí", imagem:"" },
    { familia: "R",  l: "RA", texto: "Rá", imagem:"" },
    { familia: "R",  l: "RE", texto: "Rê", imagem:"" },
    { familia: "R",  l: "RI", texto: "Rí", imagem:"" },
    { familia: "R",  l: "RO", texto: "Ró", imagem:"" },
    { familia: "R",  l: "RU", texto: "Rú", imagem:"" },
    { familia: "S",  l: "SA", texto: "Sá", imagem:"" },
    { familia: "S",  l: "SE", texto: "Sê", imagem:"" },
    { familia: "S",  l: "SI", texto: "Sí", imagem:"" },
    { familia: "S",  l: "SO", texto: "Só", imagem:"" },
    { familia: "S",  l: "SU", texto: "Sú", imagem:"" },
    { familia: "T",  l: "TA", texto: "Tá", imagem:"" },
    { familia: "T",  l: "TE", texto: "Tê", imagem:"" },
    { familia: "T",  l: "TI", texto: "Tí", imagem:"" },
    { familia: "T",  l: "TO", texto: "Tó", imagem:"" },
    { familia: "T",  l: "TU", texto: "Tú", imagem:"" },
    { familia: "V",  l: "VA", texto: "Vá", imagem:"" },
    { familia: "V",  l: "VE", texto: "Vê", imagem:"" },
    { familia: "V",  l: "VI", texto: "Ví", imagem:"" },
    { familia: "V",  l: "VO", texto: "Vó", imagem:"" },
    { familia: "V",  l: "VU", texto: "Vú", imagem:"" },
    { familia: "Z",  l: "ZA", texto: "Zá", imagem:"" },
    { familia: "Z",  l: "ZE", texto: "Zê", imagem:"" },
    { familia: "Z",  l: "ZI", texto: "Zí", imagem:"" },
    { familia: "Z",  l: "ZO", texto: "Zó", imagem:"" },
    { familia: "Z",  l: "ZU", texto: "Zú", imagem:"" },
  ];

  const familias = letras.reduce((acc, item) => {
    if (!acc[item.familia]) {
      acc[item.familia] = [];
    }
    acc[item.familia].push(item);
    return acc;
  }, {});

  return (
    <>
      <Header>Sílabas</Header>

      <div className="alert alert-info text-center fw-semibold">
        🌈 Vamos aprender as sílabas! Clique nas imagens e escute o som 🎵
      </div>

      <div className="container">
        {Object.keys(familias).map((familia) => (
          <div key={familia} className="mb-4">
            
            {/* 🔹 ALERTA DA FAMÍLIA */}
            <div className="alert alert-primary text-center fw-bold">
              Família {familia}
            </div>

            {/* 🔹 SÍLABAS */}
            <div className="row g-3">
              {familias[familia].map((item) => (
                <div key={item.l} className="col-sm-6 col-md-4 col-lg-2">
                  <Card
                    titulo={`${item.l} ${item.l.toLowerCase()}`}
                    funcao={() => falarSilabas([item.texto])}
                    img={item.imagem}
                  />
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </>
  );
}