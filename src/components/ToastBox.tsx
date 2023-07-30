import { ToastItem } from "./ToastItem";

export const ToastBox = () => {
  return (
    <ul className="fixed z-50 top-4 right-4 left-4 bottom-4 pointer-events-none">
      <ToastItem />
      <ToastItem />
      <ToastItem />
    </ul>
  );
};
