import { fetchProduct } from "@/actions";

const ServerAction = async () => {
    const productData = await fetchProduct();
    console.log("productData", productData);
    return (
        <div className="w-full min-h-screen bg-black">
            <ul className=" w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-red-500">
                {
                    productData && productData.map((item, index) => (
                        <div id={item?.id} className="rounded min-h-3 p-2 m-2 text-white bg-gray-800">
                            <li>
                               <h3> {item.title}</h3>
                               <p className="mt-2 text-sm">{item.description}</p>
                            </li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default ServerAction;