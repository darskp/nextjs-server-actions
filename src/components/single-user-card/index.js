"use client"
import { deleteUserAction } from "@/actions";
import { Button } from "../ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useContext } from "react";
import { UserContext } from "@/context";

const SingleUserCard = ({ eachUser }) => {
    const { toast } = useToast();
    const { currentEditedID, setCurrentEditedId, openPopup, setOpenPopup, addNewUserFormData, setAddNewUserFormData } = useContext(UserContext);
    const handleDelete = async (id) => {
        const deleteUserID = await deleteUserAction(id, '/user-management');
        if (deleteUserID) {
            toast({
                title: deleteUserID?.message
            })
        }
    }

    const handleEdit = async (userData) => {
        setOpenPopup(true);
        const existingData = {
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            email: userData?.email,
            address: userData?.address
        }
        setCurrentEditedId(userData._id);
        setAddNewUserFormData(existingData)
    }

    return (
        <li className="rounded min-h-3 p-2 m-2 text-white bg-gray-800">
            <h3 className="text-lg"> {eachUser?.firstName} {eachUser?.lastName &&
                <span>{` ${eachUser?.lastName}`}</span>
            }</h3>
            <p className="mt-1 text-xs">{eachUser?.email}</p>
            <div className="mt-4 flex justify-start gap-2 items-center">
                <Button onClick={() => handleEdit(eachUser)} variant="outline" size="xs" className="bg-black text-white text-xs py-1 px-2">Edit</Button>
                <Button onClick={() => handleDelete(eachUser?._id)} variant="outline" size="xs" className="bg-red-700 text-white text-xs py-1 px-2">Delete</Button>
            </div>
        </li>
    )
}

export default SingleUserCard