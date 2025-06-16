import Dropdown from "@/components/common/Dropdown";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="grow" placeholder="Search" />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>

      <Dropdown
        value=""
        options="All"
        options1="2"
        options2="4"
        options3="5"
        options4="7"
        placeholder1="2"
        placeholder2="4"
        placeholder3="5"
        placeholder4="7"
      />
    </div>
  );
};

export default page;
