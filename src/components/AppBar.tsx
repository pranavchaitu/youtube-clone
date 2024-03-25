import { SearchBar } from "./SearchBar"

export function AppBar() {
    return <div className="flex justify-between py-2 px-6">
        <div className="inline-flex items-center text-xl">
            YouTube
        </div>
        <div>
            <SearchBar />
        </div>
        <div className="inline-flex items-center">
            <button className="rounded w-20 p-1 border border-gray-200">
                Sign up
            </button>
        </div>
    </div>
}

