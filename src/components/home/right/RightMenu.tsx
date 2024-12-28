import Ad from "./Ad";
import BirthDay from "./BirthDay";
import FriendRequest from "./FriendRequest";
import UserInfo from "./UserInfo";
import UserMedia from "./UserMedia";

export default function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-8">
      {userId ? (
        <>
          <UserInfo userId={userId} />
          <UserMedia userId={userId} />
        </>
      ) : null}
      <FriendRequest />
      <BirthDay />
      <Ad size="md" />
    </div>
  );
}
