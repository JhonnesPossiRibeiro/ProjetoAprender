import Header from "../components/header/Index";
import { falar } from "../utils/Falar";
import { falarSilabas } from "../utils/FalarSilabas";

type Palavra = {
  familia: string;
  palavra: string;
  silabas: string[];
};

export function PagePalavras() {
  const palavras: Palavra[] = [
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

  // ✅ agrupamento tipado (somente 1 vez)
  const familias = palavras.reduce<Record<string, Palavra[]>>((acc, item) => {
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
        🌈 Vamos aprender as palavras! Clique para ouvir 🎵
      </div>

      <div className="container">
        {Object.keys(familias).map((familia) => (
          <div key={familia} className="mb-4">

            {/* 🔹 ALERTA DA FAMÍLIA */}
            <div className="alert alert-primary text-center fw-bold">
              Família {familia}
            </div>

            {/* 🔹 PALAVRAS */}
            <div className="row g-3">
              {familias[familia].map((item) => (
                <div key={item.palavra} className="col-sm-6 col-md-4 col-lg-2">

                  {/* 🔊 Palavra */}
                  <button
                    className="btn btn-success w-100 mb-2"
                    onClick={() => falar(item.palavra)}
                  >
                    {item.palavra}
                  </button>

                  {/* 🔊 Sílabas */}
                  <button
                    className="btn btn-outline-primary w-100"
                    onClick={() => falarSilabas(item.silabas)}
                  >
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