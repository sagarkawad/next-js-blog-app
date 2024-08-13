import connectMongoDB from "@/libs/mongodb";
import Topic from "@/model/blogs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ msg: topics });
}
