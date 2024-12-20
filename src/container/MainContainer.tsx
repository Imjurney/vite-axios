import { useQuery } from "@tanstack/react-query";
import { Product } from "../../interface";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const getProducts = async () => {
  return (await axios.get("https://fakestoreapi.com/products")).data;
};

/** 
 * @note: react router dom 이 제공하는 loader 함수는 원래 remix 를 위한 것이었지만, react router dom 에서도 사용할 수 있습니다.
 * loader 함수를 사용하면 SPA에서 SSR을 흉내낼 수 있습니다.
 * loader 함수의 실행이 끝나지 않으면 페이지가 렌더링되지 않습니다.
 * next.js 에도 비슷한게 있지요 아마?
*/
export const loader = async () => {
  const products = await getProducts();

  return products;
};

const MainContainer = () => {
  // useLoaderData 함수는 loader 함수의 반환값을 읽습니다. 
  const initialData = useLoaderData() as Product[];
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
    // react query 에 loader 함수의 반환값을 초깃값으로 제공하면 prefetch 하는 효과가 있습니다.
    initialData,
  });

  return (
    <div>
      <h1>Main</h1>
      {
        // 그래서 데이터가 undefined 일 틈이 없습니다.
        data.map((item: Product) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default MainContainer;
