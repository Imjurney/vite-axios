import { useQueryClient } from "@tanstack/react-query";
import { Product } from "../../interface";
const MainContainer = () => {
  const queryClient = useQueryClient();
  const getProductData = queryClient.getQueryData(["product"]) as Product[];
  return (
    <div>
      <h1>Main</h1>
      {getProductData &&
        getProductData.map((item: Product) => {
          console.log(item);
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
