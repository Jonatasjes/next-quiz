import type { NextPage } from "next";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const Home: NextPage = () => {
  const questaoTeste = new QuestaoModel(1, "Melhor cor?", [
    RespostaModel.errada("Verde"),
    RespostaModel.errada("Vermelho"),
    RespostaModel.errada("Azul"),
    RespostaModel.certa("Preto"),
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Questao valor={questaoTeste} />
    </div>
  );
};

export default Home;
