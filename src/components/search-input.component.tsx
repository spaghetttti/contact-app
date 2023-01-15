import { Props } from "./control-panel.component";

const SearchInput = ({ setSearchValue }: Props) => {
  return (
    <div className="w-full max-w-lg">
      <form className="bg-white shadow-md rounded pt-6 pb-8 mb-4 p-6">
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            Search
          </span>
          <input
            type="text"
            placeholder="Enter key words"
            onChange={(e) => setSearchValue(e.target.value)}
            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
