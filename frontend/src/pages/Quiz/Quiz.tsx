import React, { useState, useEffect } from "react";
import axios from "axios";

interface Pergunta {
    id: number;
    pergunta: string;
}

const Quiz: React.FC = () => {
    const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
    const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        const fetchPerguntas = async () => {
            try {
                const response = await axios.get("http://localhost:3000/quiz");
                setPerguntas(response.data);
            } catch (error) {
                setMensagem("❌ Erro ao carregar as perguntas.");
            }
        };
        fetchPerguntas();
    }, []);

    const handleRespostaChange = (id: number, valor: string) => {
        const respostaFormatada = valor.toLowerCase();
        if (respostaFormatada !== "sim" && respostaFormatada !== "não") {
            setMensagem("❌ As respostas devem ser apenas 'Sim' ou 'Não'.");
        } else {
            setMensagem("");
            setRespostas({ ...respostas, [id]: respostaFormatada });
        }
    };

    const handleEnviarRespostas = async () => {
        try {
            const respostasUsuario = Object.entries(respostas).map(([id, resposta]) => ({
                id: Number(id),
                resposta_usuario: resposta
            }));
            const response = await axios.post("http://localhost:3000/quiz/resposta", respostasUsuario);
            setMensagem(response.data.mensagem);
        } catch (error) {
            setMensagem("❌ Erro ao enviar respostas.");
        }
    };

    return (
        <div>
            <h1>Quiz</h1>
            {mensagem && <p>{mensagem}</p>}
            
            {perguntas.length > 0 ? (
                <div>
                    {perguntas.map((pergunta) => (
                        <div key={pergunta.id}>
                            <p>{pergunta.pergunta}</p>
                            <select onChange={(e) => handleRespostaChange(pergunta.id, e.target.value)}>
                                <option value="">Selecione...</option>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                    ))}
                    <button onClick={handleEnviarRespostas}>Enviar Respostas</button>
                </div>
            ) : (
                <p>Carregando perguntas...</p>
            )}
        </div>
    );
};

export default Quiz;
