import Image from "next/image";
import mongoose from "mongoose";
import dotenv from "dotenv";

import TopicsList from "@/components/TopicsList";

export default function Home() {
  return (
    <section className="flex justify-center">
      <TopicsList />
    </section>
  );
}
