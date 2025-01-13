import { cn } from "@/lib/utils";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

const Search = () => {
  const { data, setData, get, processing } = useForm({
    query: "", // Query pencarian
  });

  const handleSearch: FormEventHandler = (e) => {
    e.preventDefault();

    // Menjalankan request pencarian dengan patch
    get(route("search"));
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex w-full min-w-28 rounded-lg border focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
      <input
        className="h-10 w-full min-w-[100px] rounded-lg border border-none border-gray-300 bg-white pr-0 text-sm text-gray-700 placeholder-gray-400 shadow-none focus:border-none focus:outline-none focus:ring-0"
        type="search"
        placeholder="Search..."
        value={data.query}
        onChange={(e) => setData("query", e.target.value)}
      />
      <button
        type="submit"
        disabled={processing}
        className={cn("rounded-lg p-2 transition-all duration-200", {
          processing: "cursor-not-allowed",
        })}
        aria-label="Search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.65a7.5 7.5 0 010 10.7z"
          />
        </svg>
      </button>
    </form>
  );
};

export default Search;
