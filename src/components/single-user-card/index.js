"use client"
import { deleteUserAction } from "@/actions";
import { Button } from "../ui/button"
import { useToast } from "@/components/ui/use-toast"

const SingleUserCard = ({ eachUser }) => {
    const { toast } = useToast();

    const handleDelete = async (id) => {
        const deleteUserID = await deleteUserAction(id, '/user-management');
        toast({
            title: deleteUserID.message
        })
    }
    return (
        <div>
            <li className="rounded min-h-3 p-2 m-2 text-white bg-gray-800">
                <h3 className="text-lg"> {eachUser?.firstName} {eachUser?.lastName &&
                    <span>{` ${eachUser?.lastName}`}</span>
                }</h3>
                <p className="mt-1 text-xs">{eachUser?.email}</p>
                <div className="mt-4 flex justify-start gap-2 items-center">
                    <Button variant="outline" size="xs" className="bg-black text-white text-xs py-1 px-2">Edit</Button>
                    <Button onClick={() => handleDelete(eachUser?._id)} variant="outline" size="xs" className="bg-red-700 text-white text-xs py-1 px-2">Delete</Button>
                </div>
            </li>
        </div>
    )
}

export default SingleUserCard