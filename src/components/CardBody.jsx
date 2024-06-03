import skills from "../data/skills";

function CardBody() {
  return (
    <section className="py-3 px-3 border rounded-xl">
      <h2 className="font-semibold text-2xl mb-4">Habilidades</h2>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
        {skills.map((skill) => {
          return (
            <li key={skill.name} className="w-16 relative">
              <img
                className="grayscale transition duration-500 hover:grayscale-0 hover:scale-125 peer"
                src={skill.icon}
                alt={skill.name}
              />
              <div className="bg-white text-black rounded-md text-center w-32 absolute -top-12 -left-8 invisible peer-hover:visible p-1">
                <h1 className="font-semibold text-sm">{skill.name}</h1>
                <p className="text-xs">
                  Aprendido al nivel {skill["learned-at"]}
                </p>
                <div className="absolute top-11 left-[59px] w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent  border-t-4 border-t-white"></div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CardBody;
