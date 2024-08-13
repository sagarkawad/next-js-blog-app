import Image from "next/image";
import mongoose from "mongoose";
import dotenv from "dotenv";

import TopicsList from "@/components/TopicsList";

export default function Home() {
  // Replace with your MongoDB connection URI
  const mongoURI = process.env.MONGO_DB_URL!;

  return (
    <section className="flex justify-center">
      <TopicsList />
    </section>
  );
}
