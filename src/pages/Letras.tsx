import Card from "../components/button/Index";
import Header from "../components/header/Index";
import { falar } from "../utils/Falar";

export function PageLetras() {
  const letras = [
    { l: "A", texto: "A de Abelha", imagem:"./Abelha.png" },
    { l: "B", texto: "B de Bola", imagem:"./Bola.png" },
    { l: "C", texto: "C de Cachorro", imagem:"./Cachorro.png" },
    { l: "D", texto: "D de Dado", imagem:"./Dado.png" },
    { l: "E", texto: "É de Elefante", imagem:"./Elefante.png" },
    { l: "F", texto: "F de Foca", imagem:"./Foca.png" },
    { l: "G", texto: "G de Gato", imagem:"./Gato.png" },
    { l: "H", texto: "H de Hipopótamo", imagem:"./Hipopotamo.png" },
    { l: "I", texto: "í de Ilha", imagem:"./Ilha.png" },
    { l: "J", texto: "J de Jacaré", imagem:"./Jacare.png" },
    { l: "K", texto: "K de Kiwi", imagem:"./Kiwi.png" },
    { l: "L", texto: "L de Leão", imagem:"./Leao.png" },
    { l: "M", texto: "M de Macaco", imagem:"./Macaco.png" },
    { l: "N", texto: "N de Navio", imagem:"./Navio.png" },
    { l: "O", texto: "O de Óculos", imagem:"./Oculos.png" },
    { l: "P", texto: "P de Pato", imagem:"./Pato.png" },
    { l: "Q", texto: "Q de Queijo", imagem:"./Queijo.png" },
    { l: "R", texto: "R de Rato", imagem:"./Rato.png" },
    { l: "S", texto: "S de Sapo", imagem:"./Sapo.png" },
    { l: "T", texto: "T de Tigre", imagem:"./Tigre.png" },
    { l: "U", texto: "U de Urso", imagem:"./Urso.png" },
    { l: "V", texto: "V de Vaca", imagem:"./Vaca.png" },
    { l: "W", texto: "W de Wifi", imagem:"./Wifi.png" },
    { l: "X", texto: "X de Xícara", imagem:"./Xícara.png" },
    { l: "Y", texto: "Y de YouTube", imagem:"./YouTube.png" },
    { l: "Z", texto: "Z de Zebra", imagem:"./Zebra.png" },
  ];

  return (
    <>
      <Header>Alfabeto</Header>

      <div className="alert alert-info text-center fw-semibold">
        🌈 Vamos aprender o alfabeto! Clique nas letras e escute o som 🎵
      </div>

      <div className="row g-3 m-2">
        {letras.map((item) => (
          <div key={item.l} className="col-6 col-md-3 col-lg-2">
            <Card
              titulo={`${item.l} ${item.l.toLowerCase()}`}
              funcao={() => falar(item.texto)}
              img={item.imagem} // você pode trocar depois
            />
          </div>
        ))}
      </div>
    </>
  );
}