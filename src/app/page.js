import FeaturesCard from "@/components/FeaturesCard";
import ImageSlider from "@/components/ImageSlider";
import TutorCard from "@/components/TutorCard";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`);
  const data = await res.json();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ImageSlider></ImageSlider>
      <FeaturesCard data={data}></FeaturesCard>
      <div className="flex justify-center mb-10">
        <Link href={"/tutors"}>
          <Button>View More Tutors</Button>
        </Link>
      </div>
    </div>
  );
}
