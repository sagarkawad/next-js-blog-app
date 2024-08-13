import React from "react";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("error - ", error);
  }
};

const TopicsList = async () => {
  const data = await getTopics();
  const topics = data.msg;
  console.log(topics);
  return (
    <section className="flex flex-col items-around  bg-green-200 p-4 w-3/4">
      {topics.map((el: { _id: any; title: string; description: string }) => {
        return (
          <div className="flex justify-between">
            <div key={el._id}>
              <h2 className="font-bold">{el.title}</h2>
              <p>{el.description}</p>
            </div>
            <div className="flex">
              <p>✍️</p>
              <p>✖️</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TopicsList;
