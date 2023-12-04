import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiResturant";

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form
      method="PATCH"
      className="flex w-full justify-center border-b py-2 transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
    >
      <button>Make Priority</button>
    </fetcher.Form>
  );
}

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
