type ModalProps = {
  titulo?: string;
  funcao?: () => void;
  css?: string;
  img?: string;
  texto?: string;
  personagem?: string; // 👈 novo
};

export const ModalApresentacao = ({
  titulo,
  funcao,
  css,
  img,
  texto,
  personagem,
}: ModalProps) => {
  return (
    <div
      className={`card text-center ${css}`}
      style={{
        fontSize: "24px",
        maxWidth: "500px",
        width: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* 👇 PERSONAGEM NO CANTO */}
      {personagem && (
        <div
          style={{
            position: "absolute",
            top: "-30px",
            left: "-30px",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundImage: `url(${personagem})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "4px solid white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        />
      )}

      {/* HEADER */}
      <div className="card-header fw-bold">{titulo}</div>

      {/* IMAGEM FUNDO */}
      <div
        className="card-body"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 👇 TEXTO COM FUNDO BRANCO */}
        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#000",
            padding: "15px",
            borderRadius: "15px",
            maxWidth: "90%",
            fontWeight: "600",
          }}
        >
          {texto}
        </div>
      </div>

      {/* FOOTER */}
      <div className="card-footer">
        <button className="btn btn-primary w-100" onClick={funcao}>
          Vamos lá! 🎵
        </button>
      </div>
    </div>
  );
};