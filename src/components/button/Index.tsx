type CardProps = {
  titulo?: string;
  funcao?: () => void;
  css?: string;
  img?: string;
};

const Card = ({ titulo,funcao, css, img }: CardProps) => {
  return (
    <div
      className={`card text-center ${css}`}
      onClick={funcao}
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
