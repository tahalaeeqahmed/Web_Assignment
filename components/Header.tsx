import { UserButton } from "@clerk/nextjs";
import { UserResource } from "@clerk/types";

interface HeaderProps {
  user: UserResource | null | undefined;
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <main className="flex bg-[#232324] h-[100px] items-center px-6">
      <div className="flex gap-x-4">
        <UserButton />
        <h1 className="text-xl text-white font-semibold text-center">
          {user?.username}
        </h1>
      </div>
    </main>
  );
};
