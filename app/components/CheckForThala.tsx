"use client";   

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BadgeCheck, Trophy, XCircle } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ShareComp from "./Share";

const CheckForThala = () => {
  const [show, setShow] = useState(false);
  const [text, settext] = useState("");
  const [reason, setReason] = useState({
    txt: '',
    res: ''
  });
  const [isThala, setIsThala] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [disabled, setDisabled] = useState(true)
  const [audio, setaudio] = useState<HTMLAudioElement>()
  useEffect(() => {
    setaudio(new Audio("/audio.mp3"))
    if(audio){
        audio.volume = 0.6;
    }
  }, [])

  const play = () =>{
    if(audio){
        audio.play();
    }
  }
  

  function makeSeven(inputNumber: string) {
    if (/^\d+$/.test(inputNumber)) {
      const digits: number[] = Array.from(inputNumber, Number);
      const operators: string[] = ["+", "-", "*", "/"];

      // Generate all possible combinations of operators
      const operatorCombinations: string[][] = getOperatorCombinations(
        operators,
        digits.length - 1
      );

      // Try each combination to achieve the result of 7
      for (const operators of operatorCombinations) {
        const expression: string = digits
          .map((digit, index) =>
            index > 0 ? operators[index - 1] + digit : digit
          )
          .join("");
        const result: number = eval(expression);

        if (result === 7) {
            play();
            setReason({
                txt: text,
                res: `${expression} = 7`
            });
            settext("");
            setIsThala(true);
        }
      }
    } else if (text.length == 7) {
        play();
        setReason({
            txt: text,
            res: `word ${text} contains 7 letters in it.`
        });
      settext("");
      setIsThala(true);
    } else {
      settext("");
      setIsThala(false);
      setReason({
        txt: `${text} is not `,
        res: ''
      });
    }
    setDisabled(true)
    setisLoading(false);
  }

  function getOperatorCombinations(
    operators: string[],
    length: number
  ): string[][] {
    const combinations: string[][] = [];

    function generate(current: string[], index: number): void {
      if (index === length) {
        combinations.push([...current]);
        return;
      }

      for (const operator of operators) {
        current[index] = operator;
        generate(current, index + 1);
      }
    }

    generate([], 0);
    return combinations;
  }

  return (
    <div className="w-full flex flex-col items-center my-1">
        <audio src="/audio.mp3"></audio>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          onChange={(e) => [settext(e.target.value), text.length > 0 ? setDisabled(false) : setDisabled(true) ]}
          type="email"
          placeholder="type here..."
          value={text}
        />
        <Button type="submit" disabled={disabled} onClick={() => [setShow(true), setisLoading(true), makeSeven(text)]}>
          {
            isLoading? (
                <span className="animate-spin"><Trophy/></span>
            ) : (
                <>Check for <span className="font-bold ml-1">Thala</span></>
            )
          }
        </Button>
      </div>
      <div
        className={cn(
          "flex flex-col justify-center items-center mt-4",
          show ? "visible" : "hidden"
        )}
      >
        {isThala ? (
          <>
            <BadgeCheck className="text-green-300 w-20 h-20" />
            <p className="text-2xl max-w-lg text-center mt-4">
              <span className="text-green-300">Congratulations!!</span> {reason.txt} is{" "}
              <span className="font-bold text-blue-400">
                Thala for a reason
              </span>{" "}
              {reason.res}
            </p>
          </>
        ) : (
          <>
            <XCircle className="text-red-300 w-20 h-20" />
            <p className="text-2xl max-w-lg text-center mt-4">
              <span className="text-red-300">Oops!!</span> {reason.txt} {" "}
              <span className="font-bold text-blue-400">
                Thala for a reason
              </span>{" "}
              {reason.res}
            </p>
          </>
        )}
      <div className="mt-4">
        <ShareComp/>
      </div>
      </div>
    </div>
  );
};

export default CheckForThala;
