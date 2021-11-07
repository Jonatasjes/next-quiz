/* eslint-disable react/jsx-key */
import styles from "../styles/Questao.module.css";
import QuestaoModel from "../model/questao";
import React from "react";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

interface QuestaoProps {
  valor: QuestaoModel;
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;

  function renderizarRespostas() {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={`resp${i}`}
          valor={resposta}
          indice={i}
          letra="A"
          corLetra="#f2c866"
        />
      );
    });
  }

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      <div>{renderizarRespostas()}</div>
    </div>
  );
}
