import { fetchUserAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";
import { UserContext } from "@/context";

async function UserManagement() {
    const listofUser = await fetchUserAction();

    return (
        <div className="max-w-full min-h-screen">
            <div className="flex justify-between p-5">
                <h2 className="font-bold text-2xl">User Mangement</h2>
                <AddNewUser />
            </div>
            <div>
                <ul className="w-full p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-red-500">
                    {
                        listofUser && listofUser?.user?.map((eachUser, index) => {
                            return (<SingleUserCard eachUser={eachUser} index={eachUser?._id} />)
                        })
                    }
                </ul>
            </div>

        </div>
    );
}

export default UserManagement;