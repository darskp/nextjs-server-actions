"use server"

import { dbConnection } from "@/database"
import { User } from "@/models/user";
import { revalidatePath } from "next/cache";

export const addNewUserServerAction = async (formData, revalidate) => {
    try {
        await dbConnection();
        const data = await User.create(formData);

        if (data) {
            revalidatePath(revalidate);
            return {
                success: true,
                message: "Created Successfully"
            }
        }
        return {
            success: false,
            message: "Something went wrong! PLease Try Again"
        }

    } catch (err) {
        console.log(err)
        return {
            success: false,
            message: "Something went wrong! PLease Try Again"
        }
    }
}

//fetch
export const fetchUserAction = async () => {
    await dbConnection();
    try {
        const listofUsers = await User.find({})
        if (listofUsers) {
            return {
                success: true,
                user: JSON.parse(JSON.stringify(listofUsers)),
                message: "Fetched Successfully"
            }
        }
    } catch (err) {
        return {
            success: false,
            user: [],
            message: "Something went wrong! PLease Try Again"
        }
    }

}

export const deleteUserAction = async (deleteUserId, revalidate) => {
    await dbConnection();
    try {
        const deletedID = await User.findByIdAndDelete({ _id: deleteUserId })
        if (deletedID) {
            revalidatePath(revalidate)
            return {
                success: true,
                message: "Deleted Successfully"
            }
        } else {
            return {
                success: false,
                message: "User Id not found"
            }
        }
    } catch (err) {
        return {
            success: false,
            message: "Something went wrong! PLease Try Again"
        }
    }

}

export const updateUserAction = async (formData, userID, revalidate) => {
    await dbConnection();
    const filter = {
        _id: userID
    }
    try {
        const updatedUserData = await User.findByIdAndUpdate(
            filter, formData, {
            new: true
        })
        if (updatedUserData) {
            revalidatePath(revalidate)
            return {
                success: true,
                message: "Updated Successfully"
            }
        } else {
            return {
                success: false,
                message: "Something went wrong! Please Try Again"
            }
        }
    } catch (err) {
        return {
            success: false,
            message: "Something went wrong! PLease Try Again"
        }
    }

}