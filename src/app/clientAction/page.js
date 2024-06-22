"use client"
import { fetchProduct } from "@/actions";
import { useEffect, useState } from "react";

const ClientAction = () => {
  const [productData, setProductDta] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true);
    const data = await fetchProduct();
    if (data) {
      setLoading(false)
      setProductDta(data)
      console.log("data",data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <div>
      <h2>Loading Data Please Wait...!</h2>
    </div>
  }

  return (
    <div className="w-full min-h-screen">
      <ul className=" w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-red-500">
        {
          productData && productData?.map((item, index) => (
            <li id={item?.id} className="rounded min-h-3 p-2 m-2 text-white bg-gray-800">
              <h3> {item?.title}</h3>
              <p className="mt-2 text-sm">{item.description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ClientAction