import {CardSilabas} from "../components/card/Index";
import Header from "../components/header/Index";
import { falarSilabas } from "../utils/FalarSilabas";
import style from "../components/card/Style.module.css";

type Letra = {
  familia: string;
  l: string;
  texto: string;
  imagem: string;
};

export function PageSilabas() {
  const letras: Letra[] = [
    { familia: "B",  l: "BA", texto: "Bá de barba", imagem:"./silabas/Barba.png" },
    { familia: "B",  l: "BE", texto: "Bê de bebê", imagem:"./silabas/Bebe.png" },
    { familia: "B",  l: "BI", texto: "Bí de bicicleta", imagem:"./silabas/Bicicleta.png" },
    { familia: "B",  l: "BO", texto: "Bó de bola", imagem:"./letras/Bola.png" },
    { familia: "B",  l: "BU", texto: "Bú de bule", imagem:"./silabas/Bule.png" },
    { familia: "C",  l: "CA", texto: "Cá de cachorro", imagem:"./letras/Cachorro.png" },
    { familia: "C",  l: "CE", texto: "Cê de cebola", imagem:"./silabas/Cebola.png" },
    { familia: "C",  l: "CI", texto: "Cí de circo", imagem:"./silabas/Circo.png" },
    { familia: "C",  l: "CO", texto: "Có de coco", imagem:"./silabas/Coco.png" },
    { familia: "C",  l: "CU", texto: "Cú de cuca", imagem:"./silabas/Cuca.png" },
    { familia: "D",  l: "DA", texto: "Dá de dado", imagem:"./letras/Dado.png" },
    { familia: "D",  l: "DE", texto: "Dê de dente", imagem:"./silabas/Dente.png" },
    { familia: "D",  l: "DI", texto: "Dí de dinheiro", imagem:"./silabas/Dinheiro.png" },
    { familia: "D",  l: "DO", texto: "Dó de dóminó", imagem:"./silabas/Domino.png" },
    { familia: "D",  l: "DU", texto: "Dú de dudu", imagem:"./silabas/Dudu.png" },
    { familia: "F",  l: "FA", texto: "Fá de faca", imagem:"./silabas/Faca.png" },
    { familia: "F",  l: "FE", texto: "Fê de ferro", imagem:"./silabas/Ferro.png" },
    { familia: "F",  l: "FI", texto: "Fí de figo", imagem:"./silabas/Figo.png" },
    { familia: "F",  l: "FO", texto: "Fó de foca", imagem:"./letras/Foca.png" },
    { familia: "F",  l: "FU", texto: "Fú de fusca", imagem:"./silabas/Fusca.png" },
    { familia: "G",  l: "GA", texto: "Gá de gato", imagem:"./letras/Gato.png" },
    { familia: "G",  l: "GE", texto: "Gê de geladeira", imagem:"./silabas/Geladeira.png" },
    { familia: "G",  l: "GI", texto: "Gí de girafa", imagem:"./silabas/Girafa.png" },
    { familia: "G",  l: "GO", texto: "Gó de goiaba", imagem:"./silabas/Goiaba.png" },
    { familia: "G",  l: "GU", texto: "Gú de gude", imagem:"./silabas/Gude.png" },
    { familia: "G",  l: "GUA", texto: "Guá de guaxinim", imagem:"./silabas/Guaxinim.png" },
    { familia: "G",  l: "GUE", texto: "Guê de guepardo", imagem:"./silabas/Guepardo.png" },
    { familia: "G",  l: "GUI", texto: "Guí de guitarra", imagem:"./silabas/Guitarra.png" },
    { familia: "L",  l: "LA", texto: "Lá de laranja", imagem:"./silabas/Laranja.png" },
    { familia: "L",  l: "LE", texto: "Lê de leão", imagem:"./letras/Leao.png" },
    { familia: "L",  l: "LI", texto: "Lí de livro", imagem:"./silabas/Livro.png" },
    { familia: "L",  l: "LO", texto: "Ló de lobo", imagem:"./silabas/Lobo.png" },
    { familia: "L",  l: "LU", texto: "Lú de lua", imagem:"./silabas/Lua.png" },
    { familia: "M",  l: "MA", texto: "Má de macaco", imagem:"./letras/Macaco.png" },
    { familia: "M",  l: "ME", texto: "Mê de melancia", imagem:"./silabas/Melancia.png" },
    { familia: "M",  l: "MI", texto: "Mí de milho", imagem:"./silabas/Milho.png" },
    { familia: "M",  l: "MO", texto: "Mó de mosquito", imagem:"./silabas/Mosquito.png" },
    { familia: "M",  l: "MU", texto: "Mú de mulher", imagem:"./silabas/Mulher.png" },
    { familia: "N",  l: "NA", texto: "Ná de navio", imagem:"./letras/Navio.png" },
    { familia: "N",  l: "NE", texto: "Nê de neve", imagem:"" },
    { familia: "N",  l: "NI", texto: "Ní de ninho", imagem:"" },
    { familia: "N",  l: "NO", texto: "Nó de noite", imagem:"" },
    { familia: "N",  l: "NU", texto: "Nú de nube", imagem:"" },
    { familia: "P",  l: "PA", texto: "Pá de pata", imagem:"./letras/Pato.png" },
    { familia: "P",  l: "PE", texto: "Pê de pera", imagem:"./silabas/Pera.png" },
    { familia: "P",  l: "PI", texto: "Pí de pipoca", imagem:"" },
    { familia: "P",  l: "PO", texto: "Pó de pôr-do-sol", imagem:"" },
    { familia: "P",  l: "PU", texto: "Pú de pú", imagem:"" },
    { familia: "Q",  l: "QUA", texto: "Quá de quarto", imagem:"" },
    { familia: "Q",  l: "QUE", texto: "Quê de queijo", imagem:"" },
    { familia: "Q",  l: "QUI", texto: "Quí de quilo", imagem:"" },
    { familia: "R",  l: "RA", texto: "Rá de rato", imagem:"./letras/Rato.png" },
    { familia: "R",  l: "RE", texto: "Rê de rei", imagem:"./silabas/Rei.png" },
    { familia: "R",  l: "RI", texto: "Rí de rio", imagem:"" },
    { familia: "R",  l: "RO", texto: "Ró de rolo", imagem:"" },
    { familia: "R",  l: "RU", texto: "Rú de rú", imagem:"" },
    { familia: "S",  l: "SA", texto: "Sá de sapo", imagem:"./letras/Sapo.png" },
    { familia: "S",  l: "SE", texto: "Sê de seta", imagem:"" },
    { familia: "S",  l: "SI", texto: "Sí de siri", imagem:"" },
    { familia: "S",  l: "SO", texto: "Só de sol", imagem:"" },
    { familia: "S",  l: "SU", texto: "Sú de suco", imagem:"" },
    { familia: "T",  l: "TA", texto: "Tá de tatu", imagem:"./silabas/Tatu.png" },
    { familia: "T",  l: "TE", texto: "Tê de tenis", imagem:"./silabas/Tenis.png" },
    { familia: "T",  l: "TI", texto: "Tí de tigre", imagem:"./letras/Tigre.png" },
    { familia: "T",  l: "TO", texto: "Tó de tomate", imagem:"./silabas/Tomate.png" },
    { familia: "T",  l: "TU", texto: "Tú de tucano", imagem:"" },
    { familia: "V",  l: "VA", texto: "Vá de vaca", imagem:"./letras/Vaca.png" },
    { familia: "V",  l: "VE", texto: "Vê de vela", imagem:"" },
    { familia: "V",  l: "VI", texto: "Ví de vinho", imagem:"" },
    { familia: "V",  l: "VO", texto: "Vó de vovó", imagem:"" },
    { familia: "V",  l: "VU", texto: "Vú de vulcão", imagem:"" },
    { familia: "Z",  l: "ZA", texto: "Zá", imagem:"" },
    { familia: "Z",  l: "ZE", texto: "Zê de zebra", imagem:"./letras/Zebra.png" },
    { familia: "Z",  l: "ZI", texto: "Zí", imagem:"" },
    { familia: "Z",  l: "ZO", texto: "Zó", imagem:"" },
    { familia: "Z",  l: "ZU", texto: "Zú", imagem:"" },
  ];

   // ✅ tipado corretamente
  const familias = letras.reduce<Record<string, Letra[]>>((acc, item) => {
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
                <div key={item.l} className={`col-sm-12 col-md-4 ${style['card-col-lg-2']}`}>
                  <CardSilabas
                    titulo={`${item.l} ${item.l.toLowerCase()}`}
                    funcao={() => {
                      // const partes = quebrarSilaba(item.l);
                      falarSilabas([item.texto]);
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