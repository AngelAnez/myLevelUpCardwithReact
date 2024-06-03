import CardBar from "./CardBar";

function CardHeader() {

  return (
    <header className="flex flex-wrap gap-4 justify-center items-start select-none">
      <figure className="min-w-44 max-w-44 p-3 flex-1">
        <img className="rounded-3xl" src="./Starly.jpg" alt="Starly" />
      </figure>
      <section className="flex flex-1 flex-wrap gap-x-2 gap-y-4 items-center justify-center py-2 sm:justify-between">
        <h1 className="text-2xl font-semibold min-w-36 text-center sm:text-start">Angel Añez</h1>
        <span className="bg-blue-night px-3 py-2 rounded-lg border font-semibold">
          Ingeniero de Sistemas
        </span>
        <CardBar />
      </section>
    </header>
  );
}

export default CardHeader;
