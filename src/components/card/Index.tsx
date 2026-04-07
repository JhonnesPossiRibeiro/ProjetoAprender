type CardProps = {
  titulo?: string;
  funcao?: () => void;
  css?: string;
  img?: string;
};

export const CardLetras = ({ titulo,funcao, css, img }: CardProps) => {
  return (
    <div
      className={`card text-center ${css}`}
      onClick={funcao}
      style={{ cursor: "pointer", fontSize: "50px" }}
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
          height: "300px",
        }}
      ></div>
    </div>
  );
};

export const CardSilabas = ({ titulo,funcao, css, img }: CardProps) => {
  return (
    <div
      className={`card text-center ${css}`}
      onClick={funcao}
      style={{ cursor: "pointer", fontSize: "50px" }}
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

