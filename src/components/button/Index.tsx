import { falar } from "../../utils/Falar";

type CardProps = {
  titulo?: string;
  texto: string;
  css?: string;
  img?: string;
};

const Card = ({ titulo, texto, css, img }: CardProps) => {
  return (
    <div
      className={`card text-center ${css}`}
      onClick={() => falar(texto)}
      style={{ cursor: "pointer" }}
    >
      <div className="card-header">{titulo}</div>
      <div
        className="card-body"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "250px",
        }}
      ></div>
    </div>
  );
};

export default Card;
