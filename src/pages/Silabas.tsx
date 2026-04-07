import Card from "../components/card/Index";
import Header from "../components/header/Index";
import { falarSilabas } from "../utils/FalarSilabas";

type Letra = {
  familia: string;
  l: string;
  texto: string;
  imagem: string;
};

export function PageSilabas() {
  const letras: Letra[] = [
    { familia: "B", l: "BA", texto: "Bá", imagem: "" },
    { familia: "B", l: "BE", texto: "Bê", imagem: "" },
    { familia: "B", l: "BI", texto: "Bí", imagem: "" },
    { familia: "B", l: "BO", texto: "Bó", imagem: "" },
    { familia: "B", l: "BU", texto: "Bú", imagem: "" },
    // ... resto igual
  ];

  // ✅ tipado corretamente
  const familias = letras.reduce<Record<string, Letra[]>>((acc, item) => {
    if (!acc[item.familia]) {
      acc[item.familia] = [];
    }
    acc[item.familia].push(item);
    return acc;
  }, {});

  // ✅ função para separar sílaba (BA → B + A)
  // function quebrarSilaba(silaba: string) {
  //   if (silaba.startsWith("QU")) {
  //     return ["QU", silaba.slice(2)];
  //   }
  //   return [silaba[0], silaba.slice(1)];
  // }

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
                    funcao={() => {
                      // const partes = quebrarSilaba(item.l);
                      falarSilabas([item.l]);
                    }}
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