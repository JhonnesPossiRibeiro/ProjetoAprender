import Header from "../components/header/Index";
import { falar } from "../utils/Falar";
import { falarSilabas } from "../utils/FalarSilabas";

export function PagePalavras() {

  const palavras = [
    { familia: "A", palavra: "Abelha", silabas: ["A","be","lha"] },
    { familia: "B", palavra: "Bola", silabas: ["Bo","la"] },
    { familia: "C", palavra: "Casa", silabas: ["Ca","sa"] },
    { familia: "D", palavra: "Dado", silabas: ["Da","do"] },
    { familia: "E", palavra: "Elefante", silabas: ["E","le","fan","te"] },
    { familia: "F", palavra: "Foca", silabas: ["Fo","ca"] },
    { familia: "G", palavra: "Gato", silabas: ["Ga","to"] },
    { familia: "H", palavra: "Hipopótamo", silabas: ["Hi","po","pó","ta","mo"] },
    { familia: "I", palavra: "Igreja", silabas: ["I","gre","ja"] },
    { familia: "J", palavra: "Jacaré", silabas: ["Ja","ca","ré"] },
    { familia: "K", palavra: "Kiwi", silabas: ["Ki","wi"] },
    { familia: "L", palavra: "Leão", silabas: ["Le","ão"] },
    { familia: "M", palavra: "Macaco", silabas: ["Ma","ca","co"] },
    { familia: "N", palavra: "Navio", silabas: ["Na","vi","o"] },
    { familia: "O", palavra: "Ovelha", silabas: ["O","ve","lha"] },
    { familia: "P", palavra: "Pato", silabas: ["Pa","to"] },
    { familia: "Q", palavra: "Queijo", silabas: ["Quei","jo"] },
    { familia: "R", palavra: "Rato", silabas: ["Ra","to"] },
    { familia: "S", palavra: "Sapo", silabas: ["Sa","po"] },
    { familia: "T", palavra: "Tigre", silabas: ["Ti","gre"] },
    { familia: "U", palavra: "Uva", silabas: ["U","va"] },
    { familia: "V", palavra: "Vaca", silabas: ["Va","ca"] },
    { familia: "W", palavra: "Wafer", silabas: ["Wa","fer"] },
    { familia: "X", palavra: "Xícara", silabas: ["Xí","ca","ra"] },
    { familia: "Y", palavra: "Yak", silabas: ["Yak"] },
    { familia: "Z", palavra: "Zebra", silabas: ["Ze","bra"] },
  ];

  // Agrupar por família
  const agrupado = palavras.reduce((acc, item) => {
    if (!acc[item.familia]) {
      acc[item.familia] = [];
    }
    acc[item.familia].push(item);
    return acc;
  }, {});

  const familias = palavras.reduce((acc, item) => {
    if (!acc[item.familia]) {
      acc[item.familia] = [];
    }
    acc[item.familia].push(item);
    return acc;
  }, {});

  return (
    <>
      <Header>Palavras</Header>

      <div className="alert alert-info text-center fw-semibold">
        🌈 Vamos aprender as palavras! Clique nas imagens e escute o som 🎵
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
                <div key={item.familia} className="col-sm-6 col-md-4 col-lg-2">
                  <button onClick={() => falar(item.palavra)}>
                {item.palavra}
              </button>

              <button onClick={() => falarSilabas(item.silabas)}>
                {item.silabas.join("-")}
              </button>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
      
    </>
  );
}