import { useState } from "react";

import "./App.css";
import {
  miladiToShamsiAndShahanshahi,
  shahanshahiToMiladi,
} from "./PersianDateConverter";

function App() {
  const [miladiInput, setMiladiInput] = useState(new Date("2025-03-16"));
  const [shahanshahiInput, setShahanshahiInput] = useState("2550/12/16");
  const [convertedShahanshahi1, setConvertedShahanshahi1] = useState("");
  const [convertedShahanshahi2, setConvertedShahanshahi2] = useState("");
  const [convertedShahanshahi3, setConvertedShahanshahi3] = useState("");
  const [convertedShahanshahi4, setConvertedShahanshahi4] = useState("");
  const [convertedShahanshahi5, setConvertedShahanshahi5] = useState("");
  const [convertedMiladi, setConvertedMiladi] = useState("");

  const handleMiladiToShahanshahi = () => {
    try {
      const result1 = miladiToShamsiAndShahanshahi(miladiInput, 1);
      setConvertedShahanshahi1(result1);
      const result2 = miladiToShamsiAndShahanshahi(miladiInput, 2);
      setConvertedShahanshahi2(result2);
      const result3 = miladiToShamsiAndShahanshahi(miladiInput, 3);
      setConvertedShahanshahi3(result3);
      const result4 = miladiToShamsiAndShahanshahi(miladiInput, 4);
      setConvertedShahanshahi4(result4);
      const result5 = miladiToShamsiAndShahanshahi(miladiInput, 5);
      setConvertedShahanshahi5(result5);
    } catch (error) {
      setConvertedShahanshahi1("خطا: " + error.message);
    }
  };

  const handleShahanshahiToMiladi = () => {
    try {
      const result = shahanshahiToMiladi(shahanshahiInput);
      setConvertedMiladi(result.toISOString().split("T")[0]);
    } catch (error) {
      setConvertedMiladi("خطا: " + error.message);
    }
  };

  return (
    <div className="App" dir="rtl">
      <h1>تبدیل تاریخ</h1>
      <div>
        <h2>میلادی به شاهنشاهی</h2>
        <input
          type="date"
          onChange={(e) => setMiladiInput(new Date(e.target.value))}
          defaultValue={miladiInput.toISOString().split("T")[0]}
        />
        <button onClick={handleMiladiToShahanshahi}>تبدیل</button>
        <p>نتیجه: {convertedShahanshahi1}</p>
        <p>نتیجه: {convertedShahanshahi2}</p>
        <p>نتیجه: {convertedShahanshahi3}</p>
        <p>نتیجه: {convertedShahanshahi4}</p>
        <p>نتیجه: {convertedShahanshahi5}</p>
      </div>
      <div>
        <h2>شاهنشاهی به میلادی</h2>
        <input
          type="text"
          placeholder="yyyy/MM/dd (مثلاً 2550/12/16)"
          value={shahanshahiInput}
          onChange={(e) => setShahanshahiInput(e.target.value)}
        />
        <button onClick={handleShahanshahiToMiladi}>تبدیل</button>
        <p>نتیجه: {convertedMiladi}</p>
      </div>
    </div>
  );
}

export default App;
