"use client";
import BreadCrumb from "@/components/breadcrumb";
import { WSConnection } from './WSConnection';
import {Button} from "@/components/ui/button";

import {Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {Overview} from "@/components/overview";
import {RecentSales} from "@/components/recent-sales";
import {ScrollArea} from "@/components/ui/scroll-area";
import { useSession } from "next-auth/react";
import {AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogCancel} from "@/components/ui/alert-dialog";
import {useState, useEffect} from "react";



const breadcrumbItems = [{ title: "Devices", link: "/dashboard/devices" }];
export default function page() {
    const { data: session } = useSession();
    let userName: string = session.user?.name || "";
    const gas = 100
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (gas === 100) {
            setOpen(true)
        }
    }, [gas])

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
          <AlertDialog open={open} onOpenChange={setOpen} >
              <AlertDialogTrigger>
              </AlertDialogTrigger>
              <AlertDialogContent>
                  hello world
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogContent>
          </AlertDialog>

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
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" className="lucide lucide-wind ">
                                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/>
                                  <path d="M9.6 4.6A2 2 0 1 1 11 8H2"/>
                                  <path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>
                              </svg>
                          </CardHeader>
                          <CardContent className="grid md:grid-cols-4 mt-4 grid-cols-2 gap-2 ">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="md:text-2xl text-lg font-bold text-center">8°C</CardTitle>
                                    </CardHeader>

                                    <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                        <span>Температура</span>
                                    </CardFooter>
                                </Card>
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
                                  </CardHeader>

                                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>Давление</span>
                                  </CardFooter>
                              </Card>
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
                                  </CardHeader>

                                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>Влажность</span>
                                  </CardFooter>
                              </Card>
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
                                  </CardHeader>

                                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>CO2</span>
                                  </CardFooter>
                              </Card>
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
                                  </CardHeader>

                                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>Газ</span>
                                  </CardFooter>
                              </Card>
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
                                  </CardHeader>

                                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>Формальдегиды</span>
                                  </CardFooter>
                              </Card>
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
                                  </CardHeader>

                                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>CO</span>
                                  </CardFooter>
                              </Card>
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
                                  </CardHeader>

                                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>Дым</span>
                                  </CardFooter>
                              </Card>
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
                                  </CardHeader>

                                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>Заряд</span>
                                  </CardFooter>
                              </Card>
                          </CardContent>
                      </Card>
                      <Card className="col-span-3">
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                              <CardTitle>Датчик модульный</CardTitle>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" className="lucide lucide-component">
                                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/>
                                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/>
                                  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"/>
                                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/>
                              </svg>
                          </CardHeader>
                          <CardContent className="grid md:grid-cols-3 mt-4 grid-cols-2 gap-2 ">
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">8°C</CardTitle>
                                  </CardHeader>

                                  <CardFooter
                                      className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>Температура</span>
                                  </CardFooter>
                              </Card>
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
                                  </CardHeader>

                                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>Влажность</span>
                                  </CardFooter>
                              </Card>
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
                                  </CardHeader>

                                  <CardFooter className="self-center text-md text-center flex items-center justify-center text-wrap w-full ">
                                      <span>Давление</span>
                                  </CardFooter>
                              </Card>

                              <Card>
                                  <CardHeader>
                                      <CardTitle className="md:text-2xl text-lg font-bold text-center">963</CardTitle>
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
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" className="lucide lucide-droplets">
                                  <path
                                      d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
                                  <path
                                      d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
                              </svg>
                          </CardHeader>
                          <CardContent className="w-full flex items-center justify-center">
                            <span className="relative flex h-24 w-24 my-4">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-24 w-24 bg-green-400"></span>
                            </span>

                          </CardContent>
                      </Card>
                  </div>
              </div>
              <WSConnection />


      </div>
    </ScrollArea>
  );
}
