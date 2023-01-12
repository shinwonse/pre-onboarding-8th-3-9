import { ChangeEvent } from 'react';

// 디바운스 함수
export const debounce = (
  callback: (e: ChangeEvent<HTMLInputElement>) => void,
  delay: number
) => {
  let timerId: string | number | NodeJS.Timeout | undefined;
  return (event: ChangeEvent) => {
    if (!timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay, event);
  };
};
