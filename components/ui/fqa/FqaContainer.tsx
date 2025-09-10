import { faqs } from "@/lib/constant";
import Accordion from "./Accordion";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";

const FqaContainer = () => {
  return (
    <>
      <div className="min-h-screen bg-[#111827] px-12 flex justify-center items-center">
        <div className="px-2 py-24">
          <div className="card w-auto bg-[#1f2937] card-xl shadow-sm">
            <div className="card-body gap-4">
              <Link
                href="/contact"
                className="flex flex-row gap-2 cursor-pointer"
              >
                <FaArrowAltCircleLeft className="text-3xl text-white mb-4 hover:text-blue-500 cursor-pointer text-start" />
                <h2>Go back</h2>
              </Link>

              <h2 className="text-center text-5xl font-bold text-white mb-8">
                Frequently Asked Questions
              </h2>

              {faqs.map((faq) => (
                <Accordion
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FqaContainer;
