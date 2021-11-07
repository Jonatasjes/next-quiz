import type { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const idSelecionado = +req.query.id;

  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === idSelecionado
  );

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
    const obj = questaoSelecionada.responderCom(0).converterParaObjeto();
    res.status(200).json(obj);
  } else {
    res.status(204).send({});
  }
}
