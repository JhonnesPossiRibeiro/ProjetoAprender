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
  // A
  { familia: "A", palavra: "Abelha", silabas: ["A","be","lha"] },
  { familia: "A", palavra: "Avião", silabas: ["A","vi","ão"] },
  { familia: "A", palavra: "Arara", silabas: ["A","ra","ra"] },
  { familia: "A", palavra: "Amigo", silabas: ["A","mi","go"] },
  { familia: "A", palavra: "Anel", silabas: ["A","nel"] },
  { familia: "A", palavra: "Árvore", silabas: ["Ár","vo","re"] },

  // B
  { familia: "B", palavra: "Bola", silabas: ["Bo","la"] },
  { familia: "B", palavra: "Bala", silabas: ["Ba","la"] },
  { familia: "B", palavra: "Bicho", silabas: ["Bi","cho"] },
  { familia: "B", palavra: "Banana", silabas: ["Ba","na","na"] },
  { familia: "B", palavra: "Bebê", silabas: ["Be","bê"] },
  { familia: "B", palavra: "Barco", silabas: ["Bar","co"] },

  // C
  { familia: "C", palavra: "Casa", silabas: ["Ca","sa"] },
  { familia: "C", palavra: "Cavalo", silabas: ["Ca","va","lo"] },
  { familia: "C", palavra: "Cama", silabas: ["Ca","ma"] },
  { familia: "C", palavra: "Copo", silabas: ["Co","po"] },
  { familia: "C", palavra: "Cenoura", silabas: ["Ce","nou","ra"] },
  { familia: "C", palavra: "Cachorro", silabas: ["Ca","chor","ro"] },

  // D
  { familia: "D", palavra: "Dado", silabas: ["Da","do"] },
  { familia: "D", palavra: "Dente", silabas: ["Den","te"] },
  { familia: "D", palavra: "Doce", silabas: ["Do","ce"] },
  { familia: "D", palavra: "Dinheiro", silabas: ["Di","nhei","ro"] },
  { familia: "D", palavra: "Dragão", silabas: ["Dra","gão"] },
  { familia: "D", palavra: "Dança", silabas: ["Dan","ça"] },

  // E
  { familia: "E", palavra: "Elefante", silabas: ["E","le","fan","te"] },
  { familia: "E", palavra: "Escada", silabas: ["Es","ca","da"] },
  { familia: "E", palavra: "Escola", silabas: ["Es","co","la"] },
  { familia: "E", palavra: "Estrela", silabas: ["Es","tre","la"] },
  { familia: "E", palavra: "Enxada", silabas: ["En","xa","da"] },
  { familia: "E", palavra: "Espelho", silabas: ["Es","pe","lho"] },

  // F
  { familia: "F", palavra: "Foca", silabas: ["Fo","ca"] },
  { familia: "F", palavra: "Fada", silabas: ["Fa","da"] },
  { familia: "F", palavra: "Fogo", silabas: ["Fo","go"] },
  { familia: "F", palavra: "Fruta", silabas: ["Fru","ta"] },
  { familia: "F", palavra: "Flor", silabas: ["Flor"] },
  { familia: "F", palavra: "Ferro", silabas: ["Fer","ro"] },

  // G
  { familia: "G", palavra: "Gato", silabas: ["Ga","to"] },
  { familia: "G", palavra: "Galinha", silabas: ["Ga","li","nha"] },
  { familia: "G", palavra: "Gelo", silabas: ["Ge","lo"] },
  { familia: "G", palavra: "Girafa", silabas: ["Gi","ra","fa"] },
  { familia: "G", palavra: "Goma", silabas: ["Go","ma"] },
  { familia: "G", palavra: "Garfo", silabas: ["Gar","fo"] },

  // H
  { familia: "H", palavra: "Hipopótamo", silabas: ["Hi","po","pó","ta","mo"] },
  { familia: "H", palavra: "Helicóptero", silabas: ["He","li","cóp","te","ro"] },
  { familia: "H", palavra: "Hotel", silabas: ["Ho","tel"] },
  { familia: "H", palavra: "Hora", silabas: ["Ho","ra"] },
  { familia: "H", palavra: "Horta", silabas: ["Hor","ta"] },
  { familia: "H", palavra: "Hambúrguer", silabas: ["Ham","búr","guer"] },

  // I
  { familia: "I", palavra: "Igreja", silabas: ["I","gre","ja"] },
  { familia: "I", palavra: "Ilha", silabas: ["I","lha"] },
  { familia: "I", palavra: "Índio", silabas: ["Ín","dio"] },
  { familia: "I", palavra: "Imã", silabas: ["I","mã"] },
  { familia: "I", palavra: "Inseto", silabas: ["In","se","to"] },
  { familia: "I", palavra: "Isqueiro", silabas: ["Is","quei","ro"] },

  // J
  { familia: "J", palavra: "Jacaré", silabas: ["Ja","ca","ré"] },
  { familia: "J", palavra: "Janela", silabas: ["Ja","ne","la"] },
  { familia: "J", palavra: "Jogo", silabas: ["Jo","go"] },
  { familia: "J", palavra: "Jipe", silabas: ["Ji","pe"] },
  { familia: "J", palavra: "Jujuba", silabas: ["Ju","ju","ba"] },
  { familia: "J", palavra: "Jardim", silabas: ["Jar","dim"] },

  // K
  { familia: "K", palavra: "Kiwi", silabas: ["Ki","wi"] },
  { familia: "K", palavra: "Ketchup", silabas: ["Ket","chup"] },
  { familia: "K", palavra: "Karatê", silabas: ["Ka","ra","tê"] },
  { familia: "K", palavra: "Kilo", silabas: ["Ki","lo"] },
  { familia: "K", palavra: "Koala", silabas: ["Ko","a","la"] },
  { familia: "K", palavra: "Kombi", silabas: ["Kom","bi"] },

  // L
  { familia: "L", palavra: "Leão", silabas: ["Le","ão"] },
  { familia: "L", palavra: "Lápis", silabas: ["Lá","pis"] },
  { familia: "L", palavra: "Livro", silabas: ["Li","vro"] },
  { familia: "L", palavra: "Lua", silabas: ["Lu","a"] },
  { familia: "L", palavra: "Laranja", silabas: ["La","ran","ja"] },
  { familia: "L", palavra: "Lobo", silabas: ["Lo","bo"] },

  // M
  { familia: "M", palavra: "Macaco", silabas: ["Ma","ca","co"] },
  { familia: "M", palavra: "Mala", silabas: ["Ma","la"] },
  { familia: "M", palavra: "Mesa", silabas: ["Me","sa"] },
  { familia: "M", palavra: "Mel", silabas: ["Mel"] },
  { familia: "M", palavra: "Montanha", silabas: ["Mon","ta","nha"] },
  { familia: "M", palavra: "Morango", silabas: ["Mo","ran","go"] },

  // N
  { familia: "N", palavra: "Navio", silabas: ["Na","vi","o"] },
  { familia: "N", palavra: "Nuvem", silabas: ["Nu","vem"] },
  { familia: "N", palavra: "Nariz", silabas: ["Na","riz"] },
  { familia: "N", palavra: "Ninho", silabas: ["Ni","nho"] },
  { familia: "N", palavra: "Noite", silabas: ["Noi","te"] },
  { familia: "N", palavra: "Natação", silabas: ["Na","ta","ção"] },

  // O
  { familia: "O", palavra: "Ovelha", silabas: ["O","ve","lha"] },
  { familia: "O", palavra: "Olho", silabas: ["O","lho"] },
  { familia: "O", palavra: "Ovo", silabas: ["O","vo"] },
  { familia: "O", palavra: "Ouro", silabas: ["Ou","ro"] },
  { familia: "O", palavra: "Onça", silabas: ["On","ça"] },
  { familia: "O", palavra: "Óculos", silabas: ["Ó","cu","los"] },

  // P
  { familia: "P", palavra: "Pato", silabas: ["Pa","to"] },
  { familia: "P", palavra: "Pipa", silabas: ["Pi","pa"] },
  { familia: "P", palavra: "Peixe", silabas: ["Pei","xe"] },
  { familia: "P", palavra: "Pão", silabas: ["Pão"] },
  { familia: "P", palavra: "Pedra", silabas: ["Pe","dra"] },
  { familia: "P", palavra: "Papel", silabas: ["Pa","pel"] },

  // Q
  { familia: "Q", palavra: "Queijo", silabas: ["Quei","jo"] },
  { familia: "Q", palavra: "Quilo", silabas: ["Qui","lo"] },
  { familia: "Q", palavra: "Queda", silabas: ["Que","da"] },
  { familia: "Q", palavra: "Quarto", silabas: ["Quar","to"] },
  { familia: "Q", palavra: "Quente", silabas: ["Quen","te"] },
  { familia: "Q", palavra: "Quebra", silabas: ["Que","bra"] },

  // R
  { familia: "R", palavra: "Rato", silabas: ["Ra","to"] },
  { familia: "R", palavra: "Rua", silabas: ["Ru","a"] },
  { familia: "R", palavra: "Roda", silabas: ["Ro","da"] },
  { familia: "R", palavra: "Relógio", silabas: ["Re","ló","gio"] },
  { familia: "R", palavra: "Rosa", silabas: ["Ro","sa"] },
  { familia: "R", palavra: "Rio", silabas: ["Ri","o"] },

  // S
  { familia: "S", palavra: "Sapo", silabas: ["Sa","po"] },
  { familia: "S", palavra: "Sol", silabas: ["Sol"] },
  { familia: "S", palavra: "Sopa", silabas: ["So","pa"] },
  { familia: "S", palavra: "Sino", silabas: ["Si","no"] },
  { familia: "S", palavra: "Sapato", silabas: ["Sa","pa","to"] },
  { familia: "S", palavra: "Sorvete", silabas: ["Sor","ve","te"] },

  // T
  { familia: "T", palavra: "Tigre", silabas: ["Ti","gre"] },
  { familia: "T", palavra: "Tatu", silabas: ["Ta","tu"] },
  { familia: "T", palavra: "Tomate", silabas: ["To","ma","te"] },
  { familia: "T", palavra: "Trem", silabas: ["Trem"] },
  { familia: "T", palavra: "Telhado", silabas: ["Te","lha","do"] },
  { familia: "T", palavra: "Tesoura", silabas: ["Te","sou","ra"] },

  // U
  { familia: "U", palavra: "Uva", silabas: ["U","va"] },
  { familia: "U", palavra: "Urso", silabas: ["Ur","so"] },
  { familia: "U", palavra: "Unha", silabas: ["U","nha"] },
  { familia: "U", palavra: "Uniforme", silabas: ["U","ni","for","me"] },
  { familia: "U", palavra: "Utensílio", silabas: ["U","ten","sí","lio"] },
  { familia: "U", palavra: "Urubu", silabas: ["U","ru","bu"] },

  // V
  { familia: "V", palavra: "Vaca", silabas: ["Va","ca"] },
  { familia: "V", palavra: "Vela", silabas: ["Ve","la"] },
  { familia: "V", palavra: "Vento", silabas: ["Ven","to"] },
  { familia: "V", palavra: "Vidro", silabas: ["Vi","dro"] },
  { familia: "V", palavra: "Violão", silabas: ["Vi","o","lão"] },
  { familia: "V", palavra: "Vaso", silabas: ["Va","so"] },

  // W
  { familia: "W", palavra: "Wafer", silabas: ["Wa","fer"] },
  { familia: "W", palavra: "Web", silabas: ["Web"] },
  { familia: "W", palavra: "Wi-fi", silabas: ["Wi","fi"] },
  { familia: "W", palavra: "Waffle", silabas: ["Waf","fle"] },
  { familia: "W", palavra: "Walkman", silabas: ["Walk","man"] },
  { familia: "W", palavra: "Whisky", silabas: ["Whis","ky"] },

  // X
  { familia: "X", palavra: "Xícara", silabas: ["Xí","ca","ra"] },
  { familia: "X", palavra: "Xarope", silabas: ["Xa","ro","pe"] },
  { familia: "X", palavra: "Xadrez", silabas: ["Xa","drez"] },
  { familia: "X", palavra: "Xampu", silabas: ["Xam","pu"] },
  { familia: "X", palavra: "Xerife", silabas: ["Xe","ri","fe"] },
  { familia: "X", palavra: "Xerox", silabas: ["Xe","rox"] },

  // Y
  { familia: "Y", palavra: "Yak", silabas: ["Yak"] },
  { familia: "Y", palavra: "Yoga", silabas: ["Yo","ga"] },
  { familia: "Y", palavra: "Yoyo", silabas: ["Yo","yo"] },
  { familia: "Y", palavra: "Yakisoba", silabas: ["Ya","ki","so","ba"] },
  { familia: "Y", palavra: "Yeti", silabas: ["Ye","ti"] },
  { familia: "Y", palavra: "Yamaha", silabas: ["Ya","ma","ha"] },

  // Z
  { familia: "Z", palavra: "Zebra", silabas: ["Ze","bra"] },
  { familia: "Z", palavra: "Zíper", silabas: ["Zí","per"] },
  { familia: "Z", palavra: "Zoológico", silabas: ["Zo","o","ló","gi","co"] },
  { familia: "Z", palavra: "Zero", silabas: ["Ze","ro"] },
  { familia: "Z", palavra: "Zangado", silabas: ["Zan","ga","do"] },
  { familia: "Z", palavra: "Zumbi", silabas: ["Zum","bi"] },
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
              Com {familia}
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