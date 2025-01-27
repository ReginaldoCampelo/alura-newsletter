import data from "../../../articles.json";

const ArticleList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-gray-600 dark:text-gray-300">
      {data.map((article) => (
        <div
          className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-800 flex flex-col justify-between"
          key={article.title}
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
            <ul className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag) => (
                <li
                  className="bg-gray-200 px-2 py-1 rounded-md dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <p>{article.text}</p>
          </div>
          <div className="h-48 w-full mt-4 relative">
            <img
              className="absolute inset-0 h-full w-full object-cover border-2 border-gray-400 rounded-md"
              src={article.image}
              alt={article.alt ? article.alt : article.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
