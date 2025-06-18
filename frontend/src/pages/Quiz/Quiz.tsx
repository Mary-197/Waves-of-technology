import React, { useState } from 'react';
import './Quiz.css';

interface Question {
  question: string;
  isPositive: boolean; // se "Sim" for uma boa prática
}

const questions: Question[] = [
  { question: 'Você costuma tomar banhos demorados (mais de 15 minutos)?', isPositive: false },
  { question: 'Você fecha a torneira ao escovar os dentes?', isPositive: true },
  { question: 'Costuma regar plantas ao meio-dia?', isPositive: false },
  { question: 'Reaproveita água da chuva para limpar áreas externas?', isPositive: true },
  { question: 'Deixa a torneira ligada enquanto ensaboa a louça?', isPositive: false },
  { question: 'Utiliza máquina de lavar roupa só quando está cheia?', isPositive: true },
  { question: 'Lava o carro com mangueira?', isPositive: false },
  { question: 'Verifica e conserta vazamentos com frequência?', isPositive: true },
  { question: 'Joga óleo de cozinha na pia?', isPositive: false },
  { question: 'Utiliza redutores de vazão em torneiras e chuveiros?', isPositive: true },
];

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(10).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index: number, value: boolean) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert('Responda todas as perguntas antes de enviar!');
      return;
    }
    setSubmitted(true);
  };

  const score = answers.reduce((acc, val, i) => {
    return val === questions[i].isPositive ? acc + 1 : acc;
  }, 0);

  const feedback =
    score >= 8
      ? '🌟 Parabéns! Seus hábitos mostram grande consciência hídrica!'
      : score >= 5
      ? '👍 Você está no caminho certo, continue evoluindo!'
      : '💧 Atenção! É hora de repensar seus hábitos para ajudar o planeta.';

  return (
    <div className="quiz-container">
      <h2>💧 Quiz de Consumo Consciente</h2>
      {questions.map((q, i) => (
        <div key={i} className="card">
          <p>{q.question}</p>
          <div className="options">
            <label className={answers[i] === true ? 'selected' : ''}>
              <input
                type="radio"
                name={`q-${i}`}
                onChange={() => handleSelect(i, true)}
                disabled={submitted}
              />
              Sim
            </label>
            <label className={answers[i] === false ? 'selected' : ''}>
              <input
                type="radio"
                name={`q-${i}`}
                onChange={() => handleSelect(i, false)}
                disabled={submitted}
              />
              Não
            </label>
          </div>
        </div>
      ))}
      {!submitted && (
        <button className="submit-button" onClick={handleSubmit}>
          Enviar respostas
        </button>
      )}
      {submitted && (
        <div className="resultado">
          <h3>{feedback}</h3>
          <p>Você acertou {score} de {questions.length} perguntas.</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
