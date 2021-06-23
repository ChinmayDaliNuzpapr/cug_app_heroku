import React from "react";
import Button from "../Button/Button";
import { useRouter } from "next/router";
import axios from "axios";
export const ExtraTrendingBox = ({ category_id }) => {
  const router = useRouter();
  const [trendingList, setTrending] = React.useState(null);
  React.useEffect(async () => {
    const url = `${process.env.PRODUCTION}/api/trending/question`;
    console.log("URL IS ", url);
    const token = localStorage.getItem("jwt_token");

    console.log("TOKEN IS ", token);
    try {
      const response = await axios.post(
        url,
        { categoryID: category_id },
        {
          headers: {
            Authorization: token && `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      console.log("THE DATA 🎉🎉🎉🎉", response.data);
      setTrending(data);
    } catch (err) {
      console.log("THE ERROR 👿👿👿👿", err);
    }
  }, [category_id]);
  return (
    <div className="hidden md:block bg-blue-200 p-2 flex justify-center rounded-lg">
      <div className="rounded bg-grey-light md:w-[200px] lg:w-[300px] p-2">
        <div className="flex justify-between py-1">
          <h3 className="text-2xl text-center">Trending Questions</h3>
        </div>
        <div className="text-base mt-2">
          {trendingList &&
            trendingList.Trending_Questions.map((item, index) => (
              <div
                style={{ height: "70px" }}
                key={index}
                onClick={() => router.push(`/question/${item._id}`)}
                className="bg-white p-2 rounded mt-1 cursor-pointer hover:border-blue-900 hover:border-2"
              >
                {item.article.title.length > 60 ? (
                  <>{`${item.article.title.substring(0, 60)}+ '...'`}</>
                ) : (
                  item.article.title
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const Trending = () => {
  return (
    <>
      <div>
        <nav className="flex flex-col w-64 h-screen px-auto tex-gray-900 border rounded-lg border-gray-200">
          <div className="flex flex-wrap mt-8 mx-auto">
            <div className="w-1/2 justify-center">
              <p className="text-3xl">Trending</p>
            </div>
          </div>
          <div className="mt-10 mb-4">
            <ul className="">
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Dashboard</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Dashboard</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Dashboard</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Dashboard</span>
                </div>
              </li>
              <li className="mb-2 px-auto py-4 text-gray-900 flex flex-row  border-gray-300 hover:text-white active:bg-blue-200 hover:bg-blue-600 hover:font-bold rounded rounded-lg">
                <div className="mx-auto">
                  <span>Dashboard</span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Trending;
