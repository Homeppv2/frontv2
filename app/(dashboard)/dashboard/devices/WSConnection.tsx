"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";

const URL_WS = "ws://95.163.229.198:8001/login";

type ContollersModuleMessangesData = {
  type: number;
  number: number;
  status: number;
  charge: number;
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
  msgs: {
    ContollersLeackMessangesData?: ControllerLeakMessage;
    ContollersEnviromentMessangesData?: ContollersEnviromentMessangesData;
    ContollersModuleMessangesData?: ContollersModuleMessangesData;
  }[];
};
// export const DataContext = React.createContext(null);

export default function WSConnection({
  children,
}: {
  children: React.ReactNode;
}) {
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
      console.log("WebSocket connected");
      wsRun.send(
        JSON.stringify({
          email: "admin@admin.com",
          password: "admin",
        }),
      );
    };

    wsRun.onmessage = function (event) {
      console.log("Received message:", event.data);
      const parsedData: ParsedMessage = JSON.parse(event.data);

      if (parsedData.msgs && parsedData.msgs.length > 0) {
        const leackMessage = parsedData.msgs[0].ContollersLeackMessangesData;
        if (leackMessage) {
          setLeackValue(leackMessage.controlerleack.leack);
        }
        const enviromentMessage =
          parsedData.msgs[0].ContollersEnviromentMessangesData;
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
        const controlerModule =
          parsedData.msgs[0].ContollersModuleMessangesData;
        if (controlerModule) {
          setTemperature_md(controlerModule.controlermodule.temperature);
          setHumidity_md(controlerModule.controlermodule.temperature);
          setPressure_md(controlerModule.controlermodule.pressure);
          setGas_md(controlerModule.controlermodule.gas);
        }
      }
    };
    wsRun.onclose = function () {
      console.log("WebSocket disconnected");
    };

    return () => {
      wsRun.close();
    };
  }, []);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (leackValue !== null && leackValue != 0) {
      setOpen(true);
    }
  }, [leackValue]);
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <h2 className="text-3xl font-bold text-red-500">
            Обнаружена протечка!
          </h2>

          <AlertDialogCancel>Закрыть</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
      <Card className="col-span-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Датчик модульный</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-component"
          >
            <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
            <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
            <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
            <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
          </svg>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 mt-4 grid-cols-2 gap-2 ">
          <Card>
            <CardHeader>
              <CardTitle className="md:text-2xl text-lg font-bold text-center">
                {temperature_md || 0}
              </CardTitle>
            </CardHeader>

            <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
              <span>Температура</span>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="md:text-2xl text-lg font-bold text-center">
                {humidity_md || 0}
              </CardTitle>
            </CardHeader>

            <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
              <span>Влажность</span>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="md:text-2xl text-lg font-bold text-center">
                {pressure_md || 0}
              </CardTitle>
            </CardHeader>

            <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
              <span>Давление</span>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="md:text-2xl text-lg font-bold text-center">
                {gas_md || 0}
              </CardTitle>
            </CardHeader>

            <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
              <span>Газ</span>
            </CardFooter>
          </Card>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Датчики протечки</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-droplets"
          >
            <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
            <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
          </svg>
        </CardHeader>
        <CardContent className="w-full flex items-center justify-center">
          {(leackValue == 0 || leackValue == null) && (
            <span className="relative flex h-24 w-24 my-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-24 w-24 bg-green-400"></span>
            </span>
          )}
          {leackValue != 0 && leackValue !== null && (
            <span className="relative flex h-24 w-24 my-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-24 w-24 bg-red-400"></span>
            </span>
          )}
        </CardContent>
      </Card>

      {/*<div>*/}
      {/*  {leackValue !== null && <p>Leak: {leackValue}</p>}*/}
      {/*  {temperature !== null && <p>Temperature: {temperature}</p>}*/}
      {/*  {humidity !== null && <p>Humidity: {humidity}</p>}*/}
      {/*  {pressure !== null && <p>Pressure: {pressure}</p>}*/}
      {/*  {voc !== null && <p>Voc: {voc}</p>}*/}
      {/*  {gas1 !== null && <p>Gas1: {gas1}</p>}*/}
      {/*  {gas2 !== null && <p>Gas2: {gas2}</p>}*/}
      {/*  {gas3 !== null && <p>Gas3: {gas3}</p>}*/}
      {/*  {pm1 !== null && <p>PM1: {pm1}</p>}*/}
      {/*  {pm25 !== null && <p>PM25: {pm25}</p>}*/}
      {/*  {pm10 !== null && <p>PM10: {pm10}</p>}*/}
      {/*  {fire !== null && <p>Fire: {fire}</p>}*/}
      {/*  {smoke !== null && <p>Smoke: {smoke}</p>}*/}
      {/*</div>*/}
      {children}
    </>
  );
}
