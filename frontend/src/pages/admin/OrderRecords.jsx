import { Error, Loader } from "../../components";
import { useAppOrdersContext } from "../../context/useAppOrdersContext";

const OrderRecords = () => {
  const { appOrdersLoading, appOrdersError, appOrders } = useAppOrdersContext();
  if (appOrdersLoading) {
    return <Loader />;
  }
  if (appOrdersError) {
    return <Error />;
  }

  console.log(appOrders);

  return (
    <section className="">
      <div className="w-[90%] max-w-5xl mx-auto min-h-screen">OrderRecords</div>
    </section>
  );
};
export default OrderRecords;
