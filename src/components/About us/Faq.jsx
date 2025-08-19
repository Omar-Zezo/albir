import { useState } from "react";
import parse from "html-react-parser";

const Faq = ({ fqList }) => {
  const [questionId, setQuestionId] = useState(0);

  return (
    <div className="flex gap-10 max-lg:flex-col justify-between overflow-hidden">
      <div className="xl:w-[30%] w-full  flex-col gap-8 hidden"></div>
      <div className="w-full flex flex-col gap-8">
        <ul className="w-full flex flex-col gap-5">

          <li className="w-full">
            <button
              className={`w-full px-5 relative z-10 font-medium cursor-pointer flex items-center border-b border-black/20 ${
                questionId === 0 &&
                "after:rounded-br-none after:rounded-bl-none"
              }`}
            >
              <h4
                className={`text-base font-bold w-full py-6 text-right ${questionId === 0 ? "text-green-700":"text-secondryColor" }`}
                onClick={() => setQuestionId(0)}
              >
                كيفية الإنضمام
              </h4>
              {questionId === 0 ? (
                <span className="text-2xl relative flex justify-center items-center font-bold text-secondryColor size-10 z-[-1] after:gradientColorsBg after:rounded-md after:opacity-100">
                  &#8722;
                </span>
              ) : (
                <span
                  className="text-2xl relative flex justify-center items-center font-bold text-secondryColor size-10 z-[-1] after:gradientColorsBg after:rounded-md after:opacity-20"
                  onClick={() => setQuestionId(5)}
                >
                  &#43;
                </span>
              )}
            </button>
            <div
              className={`relative after:gradientColorsBg after:opacity-5 py-7 px-3 ${
                questionId === 0
                  ? "block after:rounded-tr-none after:rounded-tl-none"
                  : "hidden"
              }`}
            >
              <span>
                <div className="text-lg leading-8 text-[#7e7e7e]">
                  {fqList ? parse(fqList?.how_to_join) : null}
                </div>
              </span>
            </div>
          </li>

          <li className="w-full">
            <button
              className={`w-full px-5 relative z-10 font-medium cursor-pointer flex items-center border-b border-black/20 ${
                questionId === 1 &&
                "after:rounded-br-none after:rounded-bl-none"
              }`}
            >
              <h4
                className={`text-base font-bold w-full py-6 text-right ${questionId === 1 ? "text-green-700":"text-secondryColor" }`}
                onClick={() => setQuestionId(1)}
              >
                شروط الإنضمام
              </h4>
              {questionId === 1 ? (
                <span className="text-2xl relative flex justify-center items-center font-bold text-secondryColor size-10 z-[-1] after:gradientColorsBg after:rounded-md after:opacity-100">
                  &#8722;
                </span>
              ) : (
                <span
                  className="text-2xl relative flex justify-center items-center font-bold text-secondryColor size-10 z-[-1] after:gradientColorsBg after:rounded-md after:opacity-20"
                  onClick={() => setQuestionId(5)}
                >
                  &#43;
                </span>
              )}
            </button>
            <div
              className={`relative after:gradientColorsBg after:opacity-5 py-7 px-3 ${
                questionId === 1
                  ? "block after:rounded-tr-none after:rounded-tl-none"
                  : "hidden"
              }`}
            >
              <span>
                <div className="text-lg leading-8 text-[#7e7e7e]">
                  {fqList ? parse(fqList?.joining_terms) : null}
                </div>
              </span>
            </div>
          </li>

          <li className="w-full">
            <button
              className={`w-full px-5 relative z-10 font-medium cursor-pointer flex items-center ${
                questionId === 2 &&
                "after:rounded-br-none after:rounded-bl-none"
              }`}
            >
              <h4
                className={`text-base font-bold w-full py-6 text-right ${questionId === 2 ? "text-green-700":"text-secondryColor" }`}
                onClick={() => setQuestionId(2)}
              >
                مميزات العضوية
              </h4>
              {questionId === 2 ? (
                <span className="text-2xl relative flex justify-center items-center font-bold text-secondryColor size-10 z-[-1] after:gradientColorsBg after:rounded-md after:opacity-100">
                  &#8722;
                </span>
              ) : (
                <span
                  className="text-2xl relative flex justify-center items-center font-bold text-secondryColor size-10 z-[-1] after:gradientColorsBg after:rounded-md after:opacity-20"
                  onClick={() => setQuestionId(5)}
                >
                  &#43;
                </span>
              )}
            </button>
            <div
              className={`relative after:gradientColorsBg after:opacity-5 py-7 px-3 ${
                questionId === 2
                  ? "block after:rounded-tr-none after:rounded-tl-none"
                  : "hidden"
              }`}
            >
              <span>
                <div className="text-lg leading-8 text-[#7e7e7e]">
                  {fqList ? parse(fqList?.membership_benefits) : null}
                </div>
              </span>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Faq;
