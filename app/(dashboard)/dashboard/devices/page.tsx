"use client";
import BreadCrumb from "@/components/breadcrumb";
import WSConnection from "./WSConnection";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSession } from "next-auth/react";

const breadcrumbItems = [{ title: "Devices", link: "/dashboard/devices" }];
export default function page() {
  const { data: session } = useSession();
  let userName: string = session.user?.name || "";
  const gas = 100;

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-0">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Привет, {userName} 👋
            </h2>
            <div className="hidden md:flex items-center space-x-2">
              Время и дата
            </div>
          </div>
          <div className="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Датчик качества воздуха</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wind "
                >
                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                  <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                  <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
                </svg>
              </CardHeader>
              <CardContent className="grid md:grid-cols-4 mt-4 grid-cols-2 gap-2 ">
                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-2xl text-lg font-bold text-center">
                      8°C
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                    <span>Температура</span>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-2xl text-lg font-bold text-center">
                      963
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                    <span>Давление</span>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-2xl text-lg font-bold text-center">
                      963
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                    <span>Влажность</span>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-2xl text-lg font-bold text-center">
                      963
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                    <span>CO2</span>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-2xl text-lg font-bold text-center">
                      963
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                    <span>Газ</span>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-2xl text-lg font-bold text-center">
                      963
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                    <span>Формальдегиды</span>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-2xl text-lg font-bold text-center">
                      963
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                    <span>CO</span>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-2xl text-lg font-bold text-center">
                      963
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                    <span>Дым</span>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="md:text-2xl text-lg font-bold text-center">
                      963
                    </CardTitle>
                  </CardHeader>

                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                    <span>Заряд</span>
                  </CardFooter>
                </Card>
              </CardContent>
            </Card>
            <WSConnection />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
