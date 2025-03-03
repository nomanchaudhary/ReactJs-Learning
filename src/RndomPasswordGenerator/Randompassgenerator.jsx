import React, { useCallback, useState, useEffect, useRef } from "react";

function Randompassgenerator() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFRGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*(){}[]?><";
    for (let i = 1; i<= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, charallowed, setPassword]);
  const passowrdRef = useRef(null);
  const passwordCopy = useCallback(()=>{
    passowrdRef.current?.select();
    passowrdRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);
    alert("Password Copied")
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberallowed, charallowed, passwordGenerator]);
  

  return (
    <div className="bg-black max-w-full max-h-full justify-center items-center">
      <div className="bg-black max-w-full max-h-full mx-auto shadow-md text-orange-400 text-center justify-center">
        <h1 className="text-orange-500 text-3xl">Password Generator</h1>
        <input
          type="text"
          value={password}
          ref={passowrdRef}
          placeholder="passowrd"
          readOnly
          className="text-gray-600 bg-gray-50 px-1 py-2 rounded-2xl w-sm mt-4 mb-4"
        />
        <button onClick={passwordCopy} className="ouline-none bg-blue-600 text-white p-2 rounded-full  ">
          Copy
        </button>
      </div>
      <div className="text-sm flex justify-center gap-x-2">
        <div className="flex text-center m-10 gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-orange-400">Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={numberallowed}
            onChange={() => {
              setNumberallowed((prev => !prev));
            }}
          />
          <label className="text-orange-400">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charallowed}
            onChange={() => {
              setCharallowed((prev => !prev));
            }}
          />
          <label className="text-orange-400">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default Randompassgenerator;
