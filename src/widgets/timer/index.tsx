"use client";
import React, { useCallback, useEffect, useState } from "react";

const getWordForm = (number: number, forms: [string, string, string]) => {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) return forms[2];
  if (n1 > 1 && n1 < 5) return forms[1];
  if (n1 === 1) return forms[0];
  return forms[2];
};

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +targetDate - +new Date();

    if (difference <= 0) return null;

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      if (!updated) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (!timeLeft) return <span>Время вышло</span>;

  return (
    <div>
      <p className="mb-2 leading-tight">Время до начала:</p>
      <p className="text-xl leading-tight">
        {timeLeft.days} {getWordForm(timeLeft.days, ["день", "дня", "дней"])},{" "}
        {timeLeft.hours} {getWordForm(timeLeft.hours, ["час", "часа", "часов"])}
        , {timeLeft.minutes}{" "}
        {getWordForm(timeLeft.minutes, ["минута", "минуты", "минут"])}
      </p>
    </div>
  );
};

export default CountdownTimer;
