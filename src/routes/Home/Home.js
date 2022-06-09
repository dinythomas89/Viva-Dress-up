import React from "react"
import Directory from "../../components/Directory/Directory"

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519__340.jpg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874__340.jpg",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__340.jpg",
    },
    {
      id: 4,
      title: "women",
      imageUrl: "https://cdn.pixabay.com/photo/2022/03/06/03/18/friends-7050708__480.jpg",
    },
    {
      id: 5,
      title: "men",
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574__480.jpg",
    },
  ];

  return <Directory categories={categories} />
};

export default Home
