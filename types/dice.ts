// types/dice.ts
export interface DiceSide {
  title: string;
  value: number;
  image?: string;
}

export interface Dice {
  id: string;
  type: string;
  sides: DiceSide[];
}
