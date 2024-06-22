"use client"
import { addNewUserServerAction, updateUserAction } from "@/actions"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserContext } from "@/context"
import { addNewUserFormControls, addNewUserFormInitials } from "@/utils"
import { useContext } from "react"
import { useToast } from "@/components/ui/use-toast"

const AddNewUser = () => {
    const { toast } = useToast();
    const { currentEditedID, setCurrentEditedId, openPopup, setOpenPopup, addNewUserFormData, setAddNewUserFormData } = useContext(UserContext);

    function handleSaveButton() {
        return Object.keys(addNewUserFormData).every((key) => (key !== ''))
    }

    const handleNewUserAction = async () => {
        const result = !currentEditedID ? await addNewUserServerAction(addNewUserFormData, '/user-management') : await updateUserAction(addNewUserFormData,currentEditedID,  '/user-management');
        if (result) {
            toast({
                title: result?.message
            })
        }
        setAddNewUserFormData(addNewUserFormInitials);
        setOpenPopup(false)
    }

    return (
        <div>
            <Button size="sm" onClick={() => setOpenPopup(true)}>Add New User</Button>
            <Dialog open={openPopup} onOpenChange={() => {
                setOpenPopup(false)
                setAddNewUserFormData(addNewUserFormInitials)
            }}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>{currentEditedID ? 'Edit User' : 'Add New User'}</DialogTitle>
                    </DialogHeader>
                    <form action={handleNewUserAction} className="grid gap-4 py-4">
                        {
                            addNewUserFormControls?.map((controlItem, index) => (
                                <div className="grid grid-cols-4 items-center gap-4" key={controlItem?.id}>
                                    <Label htmlFor={controlItem?.name} className="text-right">
                                        {controlItem?.label}
                                    </Label>
                                    <Input
                                        id={controlItem?.name}
                                        name={controlItem?.name}
                                        className="col-span-3"
                                        placeholder={controlItem?.placeholder}
                                        value={addNewUserFormData[controlItem?.name]}
                                        onChange={(e) => setAddNewUserFormData((pre) => {
                                            const { name, value } = e.target
                                            return ({
                                                ...pre,
                                                [name]: value
                                            }
                                            )
                                        })}
                                    />
                                </div>
                            ))
                        }
                        <DialogFooter>
                            <Button disabled={!handleSaveButton()} className="disabled:opacity-45" type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewUser;