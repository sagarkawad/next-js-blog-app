import connectMongoDB from "@/libs/mongodb";
import Topic from "@/model/blogs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { id } = await request.json();
  await connectMongoDB();
  await Topic.deleteOne({ _id: id });
  return NextResponse.json({ message: "Topic Deleted" }, { status: 201 });
}
