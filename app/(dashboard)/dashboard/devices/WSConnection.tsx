"use client";

import React, { useEffect, useState } from 'react';

const URL_WS = 'ws://95.163.229.198:8001/login';

type ContollersModuleMessangesData = {
    type: number;
    number: number;
    status: number;
    charge: number ;
    temperature_MK: number;
    data: string;
    controlermodule: {
        temperature: number;
        humidity: number;
        pressure: number;
        gas: number;

    };
};

type ControllerLeakMessage = {
    type: number;
    number: number;
    status: number;
    charge: number;
    temperature_MK: number;
    data: string;
    controlerleack: {
        leack: number;
    };
};

type ContollersEnviromentMessangesData = {
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

type ParsedMessage = {
    id: number;
    rng: {
        from: number;
        to: number;
        count: number;
    };
    msgs: {
        ContollersLeackMessangesData?: ControllerLeakMessage;
        ContollersEnviromentMessangesData?: ContollersEnviromentMessangesData;
        ContollersModuleMessangesData?: ContollersModuleMessangesData;
    }[];
};

export const WSConnection = () => {
    const [leackValue, setLeackValue] = useState<number | null>(null);
    const [temperature, setTemperature] = useState<number | null>(null);
    const [humidity, setHumidity] = useState<number | null>(null);
    const [pressure, setPressure] = useState<number | null>(null);
    const [voc, setVoc] = useState<number | null>(null);
    const [gas1, setGas1] = useState<number | null>(null);
    const [gas2, setGas2] = useState<number | null>(null);
    const [gas3, setGas3] = useState<number | null>(null);
    const [pm1, setPM1] = useState<number | null>(null);
    const [pm25, setPM25] = useState<number | null>(null);
    const [pm10, setPM10] = useState<number | null>(null);
    const [fire, setFire] = useState<number | null>(null);
    const [smoke, setSmoke] = useState<number | null>(null);
    const [temperature_md, setTemperature_md] = useState<number | null>(null);
    const [humidity_md, setHumidity_md] = useState<number | null>(null);
    const [pressure_md, setPressure_md] = useState<number | null>(null);
    const [gas_md, setGas_md] = useState<number | null>(null);

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
            const parsedData: ParsedMessage = JSON.parse(event.data);

            if (parsedData.msgs && parsedData.msgs.length > 0) {
                const leackMessage = parsedData.msgs[0].ContollersLeackMessangesData;
                if (leackMessage) {
                    setLeackValue(leackMessage.controlerleack.leack);
                }
                const enviromentMessage = parsedData.msgs[0].ContollersEnviromentMessangesData;
                if (enviromentMessage) {
                    setTemperature(enviromentMessage.controlerenviroment.temperature);
                    setHumidity(enviromentMessage.controlerenviroment.humidity);
                    setPressure(enviromentMessage.controlerenviroment.pressure);
                    setVoc(enviromentMessage.controlerenviroment.voc);
                    setGas1(enviromentMessage.controlerenviroment.gas1);
                    setGas2(enviromentMessage.controlerenviroment.gas2);
                    setGas3(enviromentMessage.controlerenviroment.gas3);
                    setPM1(enviromentMessage.controlerenviroment.pm1);
                    setPM25(enviromentMessage.controlerenviroment.pm25);
                    setPM10(enviromentMessage.controlerenviroment.pm10);
                    setFire(enviromentMessage.controlerenviroment.fire);
                    setSmoke(enviromentMessage.controlerenviroment.smoke);
                }
                const controlerModule = parsedData.msgs[0].ContollersModuleMessangesData;
                if (controlerModule) {
                    setTemperature_md(controlerModule.controlermodule.temperature);
                    setHumidity_md(controlerModule.controlermodule.temperature);
                    setPressure_md(controlerModule.controlermodule.pressure);
                    setGas_md(controlerModule.controlermodule.gas);
                }
            }
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
            {(leackValue !== null || temperature !== null || humidity !== null || pressure !== null || voc !== null || gas1 !== null || gas2 !== null || gas3 !== null || pm1 !== null || pm25 !== null || pm10!== null || fire !== null || smoke !== null ) && (
                <div>
                    {leackValue !== null && <p>Leak: {leackValue}</p>}
                    {temperature !== null && <p>Temperature: {temperature}</p>}
                    {humidity !== null && <p>Humidity: {humidity}</p>}
                    {pressure !== null && <p>Pressure: {pressure}</p>}
                    {voc !== null && <p>Voc: {voc}</p>}
                    {gas1 !== null && <p>Gas1: {gas1}</p>}
                    {gas2 !== null && <p>Gas2: {gas2}</p>}
                    {gas3 !== null && <p>Gas3: {gas3}</p>}
                    {pm1 !== null && <p>PM1: {pm1}</p>}
                    {pm25 !== null && <p>PM25: {pm25}</p>}
                    {pm10 !== null && <p>PM10: {pm10}</p>}
                    {fire !== null && <p>Fire: {fire}</p>}
                    {smoke !== null && <p>Smoke: {smoke}</p>}
                    {temperature_md !== null && <p>Temperature_md: {temperature_md}</p>}
                    {humidity_md !== null && <p>Humidity_md: {humidity_md}</p>}
                    {pressure_md !== null && <p>Pressure_md: {pressure_md}</p>}
                    {gas_md !== null && <p>Gas_md: {gas_md}</p>}
                </div>
            )}
        </div>
    );
};