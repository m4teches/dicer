"use client";

import { useState } from "react";
import { Dice, DiceSide } from "@/types/dice";
import { dices as initialDices } from "@/data/dices";

export default function DiceSimulator() {
  const [results, setResults] = useState<Record<string, DiceSide>>({});

  const throwDices = () => {
    const newResults: Record<string, DiceSide> = {};

    initialDices.forEach((dice) => {
      const side =
        dice.sides[Math.floor(Math.random() * dice.sides.length)];
      newResults[dice.id] = side;
    });

    setResults(newResults);
  };

  return (
    <div style={{ padding: 24 }}>
      <h1 className="text-2xl font-bold mb-4">Dice Simulator</h1>

      <button onClick={throwDices} style={{ marginBottom: 20 }} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Throw Dices
      </button>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
        {initialDices.map((dice) => {
          const result = results[dice.id];

          return (
            <div
              key={dice.id}
              style={{
                border: "1px solid #ccc",
                padding: 16,
                width: 114,
                flexShrink: 0,
                textAlign: "center",
              }}
            >

              {result ? (
                <>
                  {result.image ? (
                    <img
                      className="text-center m-auto"
                      src={result.image}
                      alt={result.title}
                      style={{ width: 80, height: 80 }}
                    />
                  ) : (
                    <div
                      style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        margin: "16px 0",
                      }}
                    >
                      {result.value}
                    </div>
                  )}

                </>
              ) : (
                <div>Not rolled</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
