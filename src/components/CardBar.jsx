import { useState, useEffect } from "react";

const hoy = new Date();

function levelOp() {
  if (hoy.getMonth() < 9 || (hoy.getMonth() == 9 && hoy.getDate() < 29)) {
    return hoy.getFullYear() - 2002;
  } else {
    return hoy.getFullYear() + 1 - 2002;
  }
}

function progressOp() {
  let birthday;

  if (hoy.getMonth() < 9 || (hoy.getMonth() == 9 && hoy.getDate() <= 29)) {
    birthday = new Date(`${hoy.getFullYear()}-10-29 00:00`);
  } else {
    birthday = new Date(`${hoy.getFullYear() + 1}-10-29 00:00`);
  }

  const todayTime = hoy.getTime();
  const birthdayTime = birthday.getTime();
  const diff = Math.ceil((birthdayTime - todayTime) / (1000 * 60 * 60 * 24));
  const progress = 100 - Math.ceil((diff * 100) / 365);

  return progress;
}

function CardBar() {
  const [myLevel, setMyLevel] = useState(levelOp());
  const [myProgress, setMyProgress] = useState(progressOp());

  useEffect(() => {
    document.getElementById("barProgress").style.width = `${myProgress}%`;
  }, [myProgress]);

  return (
    <section className="w-full flex flex-col gap-2">
      <h3 className="italic min-w-full">Nivel: {myLevel}</h3>
      <div className="w-52 border rounded-lg p-1 min-w-full relative">
        <div id="barProgress" className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md w-0 transition-[width] ease-in-out delay-150 duration-2000 animate-pulse text-center">
          <span className="transition opacity-90">{myProgress}%</span>
          </div>
      </div>
    </section>
  );
}

export default CardBar;
