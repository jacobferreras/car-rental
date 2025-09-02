import React from "react";

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
  setCurrentPage: (value: number) => void;
}

const SearchInput = ({
  search,
  setSearch,
  setCurrentPage,
}: SearchInputProps) => {
  return (
    <div className="pr-6 lg:pr-0">
      <label className="input  w-68 lg:w-50 rounded-xl">
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
        <input
          type="search"
          className="grow"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
    </div>
  );
};

export default SearchInput;
