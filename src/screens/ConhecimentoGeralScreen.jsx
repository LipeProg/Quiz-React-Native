import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ConhecimentoGeralScreen = () => {
  const [perguntas, setPerguntas] = useState([
    {
      pergunta: "Qual é a capital do Brasil?",
      opcoes: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
      respostas: "Brasília"
    },
    {
      pergunta: "Quem escreveu 'Dom Quixote'?",
      opcoes: ["Miguel de Cervantes", "William Shakespeare", "Charles Dickens", "Fyodor Dostoevsky"],
      respostas: "Miguel de Cervantes"
    },
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      opcoes: ["Júpiter", "Terra", "Marte", "Vênus"],
      respostas : "Júpiter"
    },
    {
      pergunta: "Quem pintou a 'Mona Lisa'?",
      opcoes: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      respostas: "Leonardo da Vinci"
    },
    {
      pergunta: "Qual é a moeda oficial do Japão?",
      opcoes: ["Dólar", "Libra", "Iene", "Euro"],
      respostas: "Iene"
    },
  ]);

  const [indexPerguntas, setIndexPerguntas] = useState(0);
  const [pontos, setPontos] = useState(0);

  const proximaPergunta = (respostaSelecionada) => {
    if (respostaSelecionada === perguntas[indexPerguntas].respostas) {
      setPontos(pontos + 1);
    }else{
        alert('Resposta errada')
    }

    const proxima = indexPerguntas + 1;
    if (proxima < perguntas.length) {
      setIndexPerguntas(proxima);
    }else{
        alert('fim do quiz')
    }
  };

  return (
    <View>
      <Text>{perguntas[indexPerguntas].pergunta}</Text>
      {perguntas[indexPerguntas].opcoes.map((respostas, index)=> (
        <Button
        key={index}
        title={respostas}
        onPress={() => proximaPergunta(respostas)}
        />

      ))}
      <Text>Pontuação: {pontos}</Text>
    </View>
  );
};

export default ConhecimentoGeralScreen;

const styles = StyleSheet.create({});
