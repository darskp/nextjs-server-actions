"use client"
import { addNewUserFormInitials } from '@/utils';
import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserState = ({ children }) => {
    const [currentEditedID, setCurrentEditedId] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserFormInitials);

    const value = {
        currentEditedID, setCurrentEditedId, openPopup, setOpenPopup, addNewUserFormData, setAddNewUserFormData
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>

    )
}

export default UserState