import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="/thumbnail/thumbnaila.jpg"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="/people/me.jpeg"
          alt=""
          width={48}
          height={48}
          className="w-12 h-12 rounded-full absolute right-0 left-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="min-h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Leo Constantin</span>
        <div className="text-gray-500 text-center">
          <p>Software Engineer</p>
          <p>San Francisco, CA</p>
        </div>
        <div className="text-center">
          <p className="text-gray-500">1.2k Followers</p>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;

// import Image from "next/image";

// const ProfileCard = () => {
//   return (
//     <div className=" bg-white rounded-lg shadow-md text-sm flex flex-col items-center gap-6">
//       <div className="relative w-full h-32">
//         <Image
//           src="/thumbnail/thumbnaila.jpg"
//           alt="Cover Image"
//           fill
//           className="rounded-t-lg object-cover"
//         />
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
//           <Image
//             src="/people/me.jpeg"
//             alt="User Image"
//             width={80}
//             height={80}
//             className="rounded-full border-4 border-white"
//           />
//         </div>
//       </div>
//       <div className="text-center ">
//         <h2 className="text-lg font-semibold">User Name</h2>
//         <p className="text-gray-500">User Bio</p>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
