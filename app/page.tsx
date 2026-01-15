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
      <h1>Dice Simulator</h1>

      <button onClick={throwDices} style={{ marginBottom: 20 }}>
        Throw Dices
      </button>

      <div style={{ display: "flex", gap: 24 }}>
        {initialDices.map((dice) => {
          const result = results[dice.id];

          return (
            <div
              key={dice.id}
              style={{
                border: "1px solid #ccc",
                padding: 16,
                width: 114,
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
