"use client";
import { CounterResponse } from "@/models/counter";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOme,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  return data;
};

export const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispach = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => dispach(initCounterState(count)));
  }, [dispach]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-stone-50 hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispach(addOme())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-stone-50 hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispach(substractOne())}
        >
          -1
        </button>
      </div>
    </div>
  );
};
