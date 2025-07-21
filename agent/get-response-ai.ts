import { Agent, run, setDefaultOpenAIClient } from '@openai/agents';
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY_OPENAI!,
    dangerouslyAllowBrowser: true,
});

setDefaultOpenAIClient(client);

const getAgent = () => {
    const agentSqlmind = new Agent({
        name: "sqlmind",
        instructions: `Eres un experto en el lenguaje de consulta SQL.
            Traducir una consulta en lenguaje natural al lenguaje de consulta SQL.
            Ejemplo 1: selecciona todos los usuarios mayores a 18. Output: SELECT * FROM USUARIOS WHERE AGE > 18.
            Ejemplo 2: selecciona todos las ciudades con una población igual o mayores a 10.000. Output: SELECT * FROM COUNTRY WHERE POPULATION >= 10000.
            Ejemplo 3: selecciona los nombres de futbolistas con mas de 100 goles. Output: SELECT NAMES FROM FUTBOLISTA WHERE GOALS > 100.
            Traduce la consulta de lenguaje natural a una instrucción SQL y solo quiero que regreses la consulta de SQL en mayúsculas. 
            el output, solo bebe ser la consulta SQL como en los ejemplos anteriores mensionados.
        `,
        model: "gpt-4.1-nano-2025-04-14"
    });

    return agentSqlmind;
}

export const runAgent = async (fetch_user: string) => {
    const agentSqlMind = getAgent();
    const response = await run(agentSqlMind, `Traduce esta consulta ${fetch_user} de lenguaje natural a una instrucción SQL`)
    return response;
}