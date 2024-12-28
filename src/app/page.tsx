import AddPost from "@/components/home/center/AddPost";
import Feed from "@/components/home/center/Feed";
import Stories from "@/components/home/center/Stories";
import LeftMenu from "@/components/home/left/LeftMenu";
import RightMenu from "@/components/home/right/RightMenu";

export default function Home() {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6 ">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
}
