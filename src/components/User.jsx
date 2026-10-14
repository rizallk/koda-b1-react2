import { useEffect, useState } from 'react';

export default function User() {
  const [result, setResult] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchUser = async () => {
    try {
      setIsLoading(true);

      const isSearchNameExistsUrl = searchName
        ? `https://jsonplaceholder.typicode.com/users?name=${encodeURIComponent(searchName)}`
        : 'https://jsonplaceholder.typicode.com/users';

      const res = await fetch(isSearchNameExistsUrl);
      const data = await res.json();

      setResult(data);
    } catch (error) {
      console.log(error);
      setErrorMsg(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function fetch() {
      await fetchUser();
    }

    fetch();
  }, []);

  return (
    <div className="my-6">
      <h1 className="text-2xl font-semibold">Cari Pengguna</h1>

      <div className="flex gap-3 my-3">
        <input
          className="border border-fuchsia-700 rounded-md py-2 px-3"
          type="search"
          size={30}
          placeholder="Cari pengguna berdasarkan nama"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button
          className="bg-fuchsia-600 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-fuchsia-700 transition"
          onClick={fetchUser}
        >
          Cari
        </button>
      </div>

      <hr className="text-gray-400 my-5" />

      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : errorMsg ? (
        <div className="bg-red-600 text-white p-3 rounded-2xl">
          Error: {errorMsg}
        </div>
      ) : result.length > 0 ? (
        <>
          <div className="grid  grid-cols-2 md:grid-cols-3 gap-3 w-full">
            {result.map((v, i) => {
              return (
                <div
                  key={i}
                  className="bg-fuchsia-400 rounded-2xl p-4 overflow-hidden hover:scale-105 transition"
                >
                  <ul className="list-disc ml-5">
                    <li>{v.name}</li>
                    <li>{v.email}</li>
                    <li>{v.website}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500">Tidak ada data.</div>
      )}
    </div>
  );
}
