import Link from "next/link";

const QuickHelpSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-2 py-24 bg-[#18202f]">
        <div className="text-2xl lg:text-5xl font-family-mono font-bold mb-4 text-white pl-4">
          Need Quick Answers?
        </div>
        <div className="text-md lg:text-xl font-family-sans text-white text-center mb-8 px-4">
          For common questions, check our comprehensive FAQ section or browse
          our support resources.
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link href="/faq">
            <button className="btn bg-[#1d4ed8]  rounded-xl">
              Visit Our FAQ <i className="bi bi-patch-question-fill"></i>
            </button>
          </Link>

          <button className="btn bg-[#1d4ed8]  rounded-xl">
            Support Center <i className="bi bi-info-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickHelpSection;
