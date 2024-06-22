"use client"
import React, { Children, createContext, useState } from 'react';

export const UserContext = createContext(null);
export const UserState = () => {
    const [currentEditedID, setCurrentEditedId] = useState(null);
    const value = {
        currentEditedID, setCurrentEditedId
    }
    return (
        <UserContext.Provider value={value}>
            {Children}
        </UserContext.Provider>

    )
}

export default UserState