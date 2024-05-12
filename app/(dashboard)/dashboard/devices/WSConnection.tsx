import React, { useEffect, useState } from 'react';

const URL_WS = 'ws://95.163.229.198:8001/login';

type Message = {
    ContollersEnviromentMessangesData: {
        type: number;
        number: number;
        status: number;
        charge: number;
        temperature_MK: number;
        data: string;
        controlerenviroment: {
            temperature: number;
            humidity: number;
            pressure: number;
            voc: number;
            gas1: number;
            gas2: number;
            gas3: number;
            pm1: number;
            pm25: number;
            pm10: number;
            fire: number;
            smoke: number;
        };
    };
};

export const WSConnection = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const wsRun = new WebSocket(URL_WS);

        wsRun.onopen = function () {
            console.log('WebSocket connected');
            wsRun.send(JSON.stringify({
                email: 'admin@admin.com',
                password: 'admin',
            }));
        };

        wsRun.onmessage = function (event) {
            console.log('Received message:', event.data);
            const parsedData = JSON.parse(event.data);
            console.log('Parsed data:', parsedData);
            setMessages(parsedData.msgs);
        };

        wsRun.onclose = function () {
            console.log('WebSocket disconnected');
        };

        return () => {
            wsRun.close();
        };
    }, []);

    return (
        <div>
            <ul>
                {messages && messages.length > 0 && messages.map((msg, index) => (
                    <li key={index}>
                        <div>
                            <h4>Controller Environment:</h4>
                            <p>Temperature: {msg.ContollersEnviromentMessangesData.controlerenviroment.temperature}</p>
                            <p>Humidity: {msg.ContollersEnviromentMessangesData.controlerenviroment.humidity}</p>
                            <p>Pressure: {msg.ContollersEnviromentMessangesData.controlerenviroment.pressure}</p>
                            <p>VOC: {msg.ContollersEnviromentMessangesData.controlerenviroment.voc}</p>
                            <p>gas1: {msg.ContollersEnviromentMessangesData.controlerenviroment.gas1}</p>
                            <p>gas2: {msg.ContollersEnviromentMessangesData.controlerenviroment.gas2}</p>
                            <p>gas3: {msg.ContollersEnviromentMessangesData.controlerenviroment.gas3}</p>
                            <p>pm1: {msg.ContollersEnviromentMessangesData.controlerenviroment.pm1}</p>
                            <p>pm25: {msg.ContollersEnviromentMessangesData.controlerenviroment.pm25}</p>
                            <p>fire: {msg.ContollersEnviromentMessangesData.controlerenviroment.fire}</p>
                            <p>smoke: {msg.ContollersEnviromentMessangesData.controlerenviroment.smoke}</p>
                            {/* Add other values as needed */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Добавьте маркировку "use client"
export const useClient = true;
