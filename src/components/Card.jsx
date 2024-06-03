import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

function Card() {
  return (
    <article className='bg-black bg-opacity-70 max-w-2xl mx-10 p-5 border rounded-2xl self-center flex flex-col gap-5 shadow-card absolute'>
      <CardHeader/>
      <CardBody/>
    </article>
  )
}

export default Card