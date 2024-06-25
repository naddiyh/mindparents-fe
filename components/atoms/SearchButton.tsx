import React from "react";
import { IoIosSearch } from "react-icons/io";

interface SearchProps {
  filterText: string;
  onFilterTextChange: (text: string) => void;
}

export const Search = ({ filterText, onFilterTextChange }: SearchProps) => {
  return (
    <div className="relative max-w-[400px]">
      <IoIosSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-500" />
      <input
        type="text"
        className="w-full rounded-md border px-4 py-1 pl-10 outline-none"
        placeholder="Cari artikel..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </div>
  );
};
