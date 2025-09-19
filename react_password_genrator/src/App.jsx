import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const passwordRef=useRef(null)

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
     window.navigator.clipboard.writeText(password)
  })

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md mx-auto shadow-2xl rounded-2xl px-6 py-8 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-400">
          🔐 Password Generator
        </h1>

        {/* Password box */}
        <div className="flex items-center shadow rounded-lg overflow-hidden mb-4 bg-gray-800">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-lg bg-gray-800 text-blue-300"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 font-semibold"
          >
            Copy
          </button>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center justify-between">
            <label className="mr-2">Password Length: {length}</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-40 accent-blue-500"
            />
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            Include Special Characters
          </label>
        </div>

        {/* Generate button */}
        <button
          onClick={passwordGenerator}
          className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-2 rounded-lg font-bold"
        >
          Generate New Password
        </button>
      </div>
    </div>
  );
}

export default App;
