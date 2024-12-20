import Image from "next/image";

export default function Stories() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* Story */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="/people/2.jpg"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span>Ricky</span>
        </div>
        {/* Story */}
        <ExampleStory />
        <ExampleStory />
        <ExampleStory />
        <ExampleStory />
        <ExampleStory />
        <ExampleStory />
        <ExampleStory />
        <ExampleStory />
      </div>
    </div>
  );
}

function ExampleStory() {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <Image
        src="/people/2.jpg"
        alt=""
        width={80}
        height={80}
        className="w-20 h-20 rounded-full ring-2"
      />
      <span>Ricky</span>
    </div>
  );
}
