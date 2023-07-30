import classNames from "classnames";

export const ToastItem = ({ translateY }: { translateY: number }) => {
  return (
    <li
      className="absolute left-0 right-0 top-0 flex justify-center pointer-events-auto"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="max-w-[400px] w-full h-[80px] flex justify-center shadow-sm rounded-xl border-border-color-dividers border-[1px]">
        <div className="w-[100%] flex border-r-[1px] p-[15px] gap-x-[8px] border-r-border-color-dividers">
          <div className="w-[45px] h-[45px]">
            <img
              className="w-full h-full rounded-full"
              src="https://www.stuttgarter-nachrichten.de/media.media.0b8a5c00-28d2-4097-9a38-eaca719a4650.original1024.jpg"
            />
          </div>
          <article className="flex flex-col text-default">
            <span className="font-semibold">kendall jenner</span>
            <span className=" text-text-color-disabled">
              Sure! 8:30pm works great!
            </span>
          </article>
        </div>
        <div className="w-[20%] flex justify-center items-center text-text-color-secondary cursor-pointer">
          close
        </div>
      </div>
    </li>
  );
};

// left: 0px; right: 0px; display: flex; position: absolute; transition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s; transform: translateY(0px); top: 0px; justify-content: center;
