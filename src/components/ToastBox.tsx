import { useState } from "react";
import { ToastItem } from "./ToastItem";

interface ToastBox {
  showToast: boolean;
}

type ShowToastList = {
  id: number;
  message: string;
  timestamp: string;
};

export const ToastBox = () => {
  const [showToastList, setShowToastList] = useState<ShowToastList[]>([]);

  const onShowToast = () => {
    const newToast = {
      id: showToastList.length,
      message: "This is a Toast message!",
      timestamp: new Date().toISOString(),
    };
    setShowToastList((prevToasts) => [...prevToasts, newToast]);
  };

  const onToastRemove = (id: number) => {
    setShowToastList((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== id)
    );
  };

  console.log(showToastList);

  return (
    <>
      <button
        className="w-[100px] py-[20px] bg-main-color-primary text-general-white rounded-xl relative"
        onClick={() => onShowToast()}
      >
        Click Me
      </button>
      <ul className="fixed z-50 top-4 right-4 left-4 bottom-4 pointer-events-none tracking-normal duration-300">
        {showToastList.map((el, idx) => (
          <ToastItem
            key={idx}
            id={idx}
            translateY={idx * 96}
            onToastRemove={onToastRemove}
          />
        ))}
      </ul>
    </>
  );
};
