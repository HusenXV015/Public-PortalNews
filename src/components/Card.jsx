import { useNavigate } from "react-router-dom";
export default function Card({ article }) {
  const navigate = useNavigate()

  function handleClick(id) {
    navigate(`/detail/${id}`)
  }
  return (
    <>
        <div className="transform bg-gray-300 p-4 shadow-xl transition duration-300 hover:scale-105 md:max ">
          <figure className="ml-10">
          <img 
          className="h-32 my-4" 
          src={article.imgUrl} 
          alt="Article image"/>
          </figure>
          <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
          <p className="text-gray-600 mb-4">
            {article.content}
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full" onClick={() => handleClick(article.id)}>
            Detail
          </button>
        </div>
    </>
  );
}
// 