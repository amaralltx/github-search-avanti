export default function UserCard({ user }) {
    if (user) {
        return (
            <div className="w-3/4 flex bg-card-bg rounded-3xl py-8 px-16">
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="h-55
                                rounded-full
                                border-2
                                border-primary"
                />
                <div className="flex flex-col justify-center p-8">
                    <h2 className="text-2xl text-primary font-bold">
                        {user.name || user.login}
                    </h2>
                    <p className=" text-black">{user.bio}</p>
                </div>
            </div>
        );
    }
}
