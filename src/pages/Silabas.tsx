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
    {familia: "H",  l: "HA", texto: "Há de harpa", imagem:"./silabas/Harpa.png" },
    { familia: "H",  l: "HE", texto: "Hê de hélice", imagem:"./silabas/Helice.png" },
    { familia: "H",  l: "HI", texto: "Hí de hipopótamo", imagem:"./letras/Hipopotamo.png" },
    { familia: "H",  l: "HO", texto: "Hó de hotel", imagem:"./silabas/Hotel.png" },
    { familia: "H",  l: "HU", texto: "Hú de húmus", imagem:"./silabas/Humus.png" },
    { familia: "J",  l: "JA", texto: "Já de jacaré", imagem:"./letras/Jacare.png" },
    { familia: "J",  l: "JE", texto: "Jê de Jesus", imagem:"./silabas/Jesus.png" },
    { familia: "J",  l: "JI", texto: "Jí de jiló", imagem:"./silabas/Jilo.png" },
    { familia: "J",  l: "JO", texto: "Jó de joaninha", imagem:"./silabas/Joaninha.png" },
    { familia: "J",  l: "JU", texto: "Jú de jugo", imagem:"./silabas/Jugo.png" },
    { familia: "K",  l: "KA", texto: "Ká de karaokê", imagem:"./silabas/Karaoke.png" },
    { familia: "K",  l: "KE", texto: "Kê de kebab", imagem:"./silabas/Kebab.png" },
    { familia: "K",  l: "KI", texto: "Kí de Kiúi", imagem:"./letras/Kiwi.png" },
    { familia: "K",  l: "KO", texto: "Kó de Kombi", imagem:"./silabas/Kombi.png" },
    { familia: "K",  l: "KU", texto: "Kú de kubo", imagem:"./silabas/Kubo.png" },
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
    { familia: "N",  l: "NE", texto: "Nê de néve", imagem:"./silabas/Neve.png" },
    { familia: "N",  l: "NI", texto: "Ní de ninja", imagem:"./silabas/Ninja.png" },
    { familia: "N",  l: "NO", texto: "Nó de noiva", imagem:"./silabas/Noiva.png" },
    { familia: "N",  l: "NU", texto: "Nú de nube", imagem:"./silabas/Nube.png" },
    { familia: "P",  l: "PA", texto: "Pá de pata", imagem:"./letras/Pato.png" },
    { familia: "P",  l: "PE", texto: "Pê de pera", imagem:"./silabas/Pera.png" },
    { familia: "P",  l: "PI", texto: "Pí de pipoca", imagem:"./silabas/Pipoca.png" },
    { familia: "P",  l: "PO", texto: "Pó de porco", imagem:"./silabas/Porco.png" },
    { familia: "P",  l: "PU", texto: "Pú de pulga", imagem:"./silabas/Pulga.png" },
    { familia: "Q",  l: "QUA", texto: "Quá de quati", imagem:"./silabas/Quati.png" },
    { familia: "Q",  l: "QUE", texto: "Quê de queijo", imagem:"./letras/Queijo.png" },
    { familia: "Q",  l: "QUI", texto: "Quí de quilo", imagem:"./silabas/Quilo.png" },
    { familia: "R",  l: "RA", texto: "Rá de rato", imagem:"./letras/Rato.png" },
    { familia: "R",  l: "RE", texto: "Rê de rei", imagem:"./silabas/Rei.png" },
    { familia: "R",  l: "RI", texto: "Rí de rinoceronte", imagem:"./silabas/Rinoceronte.png" },
    { familia: "R",  l: "RO", texto: "Ró de roda", imagem:"./silabas/Roda.png" },
    { familia: "R",  l: "RU", texto: "Rú de Rúa", imagem:"./silabas/Rua.png" },
    { familia: "S",  l: "SA", texto: "Sá de sapo", imagem:"./letras/Sapo.png" },
    { familia: "S",  l: "SE", texto: "Sê de séta", imagem:"./silabas/Seta.png" },
    { familia: "S",  l: "SI", texto: "Sí de siri", imagem:"./silabas/Siri.png" },
    { familia: "S",  l: "SO", texto: "Só de sol", imagem:"./silabas/Sol.png" },
    { familia: "S",  l: "SU", texto: "Sú...de suco", imagem:"./silabas/Suco.png" },
    { familia: "T",  l: "TA", texto: "Tá de tatu", imagem:"./silabas/Tatu.png" },
    { familia: "T",  l: "TE", texto: "Tê de tênis", imagem:"./silabas/Tenis.png" },
    { familia: "T",  l: "TI", texto: "Tí de tigre", imagem:"./letras/Tigre.png" },
    { familia: "T",  l: "TO", texto: "Tó de tomate", imagem:"./silabas/Tomate.png" },
    { familia: "T",  l: "TU", texto: "Tú de tucano", imagem:"./silabas/Tucano.png" },
    { familia: "V",  l: "VA", texto: "Vá de vaca", imagem:"./letras/Vaca.png" },
    { familia: "V",  l: "VE", texto: "Vê de vela", imagem:"./silabas/Vela.png" },
    { familia: "V",  l: "VI", texto: "Ví de vinho", imagem:"./silabas/Vinho.png" },
    { familia: "V",  l: "VO", texto: "Vó de vovó", imagem:"./silabas/Vovo.png" },
    { familia: "V",  l: "VU", texto: "Vú de vulcão", imagem:"./silabas/Vulcao.png" },
    {familia: "W",  l: "WA", texto: "Wá de wally", imagem:"./silabas/Wally.png" },
    { familia: "W",  l: "WE", texto: "Wê de web", imagem:"./silabas/Web.png" },
    { familia: "W",  l: "WI", texto: "Wí de wifi", imagem:"./letras/Wifi.png" },
    { familia: "W",  l: "WO", texto: "Wó de wok", imagem:"./silabas/Wok.png" },
    { familia: "W",  l: "WU", texto: "Wú de wushu", imagem:"./silabas/Wushu.png" },
    { familia: "X",  l: "XA", texto: "Xá de xadrez", imagem:"./silabas/Xadrez.png" },
    { familia: "X",  l: "XE", texto: "Xê de xerife", imagem:"./silabas/Xerife.png" },
    { familia: "X",  l: "XI", texto: "Xí de xícara", imagem:"./letras/Xicara.png" },
    { familia: "X",  l: "XO", texto: "Xó de xoxo", imagem:"./silabas/Xoxo.png" },
    { familia: "X",  l: "XU", texto: "Xú de xuxa", imagem:"./silabas/Xuxa.png" },
    { familia: "Z",  l: "ZA", texto: "Zá de zangão", imagem:"./silabas/Zangao.png" },
    { familia: "Z",  l: "ZE", texto: "Zê de zebra", imagem:"./letras/Zebra.png" },
    { familia: "Z",  l: "ZI", texto: "Zí de zico", imagem:"./silabas/Zico.png" },
    { familia: "Z",  l: "ZO", texto: "Zó de zorro", imagem:"./silabas/Zorro.png" },
    { familia: "Z",  l: "ZU", texto: "Zú de zumbi", imagem:"./silabas/Zumbi.png" },
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