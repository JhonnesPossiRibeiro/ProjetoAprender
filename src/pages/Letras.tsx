import Card from "../components/card/Index";
import Header from "../components/header/Index";
import { falar } from "../utils/Falar";

export function PageLetras() {
  const letras = [
    { l: "A", texto: "A de Abelha", imagem:"./letras/Abelha.png" },
    { l: "B", texto: "B de Bola", imagem:"./letras/Bola.png" },
    { l: "C", texto: "C de Cachorro", imagem:"./letras/Cachorro.png" },
    { l: "D", texto: "D de Dado", imagem:"./letras/Dado.png" },
    { l: "E", texto: "É de Elefante", imagem:"./letras/Elefante.png" },
    { l: "F", texto: "F de Foca", imagem:"./letras/Foca.png" },
    { l: "G", texto: "G de Gato", imagem:"./letras/Gato.png" },
    { l: "H", texto: "H de Hipopótamo", imagem:"./letras/Hipopotamo.png" },
    { l: "I", texto: "I...de...ilha", imagem:"./letras/Ilha.png" },
    { l: "J", texto: "J de Jacaré", imagem:"./letras/Jacare.png" },
    { l: "K", texto: "K de Kiwi", imagem:"./letras/Kiwi.png" },
    { l: "L", texto: "L de Leão", imagem:"./letras/Leao.png" },
    { l: "M", texto: "M de Macaco", imagem:"./letras/Macaco.png" },
    { l: "N", texto: "N de Navio", imagem:"./letras/Navio.png" },
    { l: "O", texto: "O de Óculos", imagem:"./letras/Oculos.png" },
    { l: "P", texto: "P de Pato", imagem:"./letras/Pato.png" },
    { l: "Q", texto: "Q de Queijo", imagem:"./letras/Queijo.png" },
    { l: "R", texto: "R de Rato", imagem:"./letras/Rato.png" },
    { l: "S", texto: "S de Sapo", imagem:"./letras/Sapo.png" },
    { l: "T", texto: "T de Tigre", imagem:"./letras/Tigre.png" },
    { l: "U", texto: "U de Urso", imagem:"./letras/Urso.png" },
    { l: "V", texto: "V de Vaca", imagem:"./letras/Vaca.png" },
    { l: "W", texto: "W de UaiFai", imagem:"./letras/Wifi.png" },
    { l: "X", texto: "X de Xícara", imagem:"./letras/Xicara.png" },
    { l: "Y", texto: "Ipissulómm de íú...Tube", imagem:"./letras/Youtube.png" },
    { l: "Z", texto: "Z de Zebra", imagem:"./letras/Zebra.png" },
  ];

  return (
    <>
      <Header>Alfabeto</Header>

      <div className="alert alert-info text-center fw-semibold">
        🌈 Vamos aprender o alfabeto! Clique nas letras e escute o som 🎵
      </div>

      <div className="row g-3 m-2">
        {letras.map((item) => (
          <div key={item.l} className="col-sm-6 col-md-4 col-lg-2">
            <Card
              titulo={`${item.l} ${item.l.toLowerCase()}`}
              funcao={() => falar(item.texto)}
              img={item.imagem} 
            />
          </div>
        ))}
      </div>
    </>
  );
}