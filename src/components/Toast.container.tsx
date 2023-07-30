import { ToastBox } from "./ToastBox";

export const ToastContainer = () => {
  return (
    <section className="fixed z-50 top-4 right-4 left-4 bottom-4 pointer-events-none">
      <ToastBox />
    </section>
  );
};

// position: fixed;
// z-index: 9999;
// top: 16px;
// left: 16px;
// right: 16px;
// bottom: 16px;
// pointer-events: none;
