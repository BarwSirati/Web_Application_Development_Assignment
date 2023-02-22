import React from "react";
import Box from "./components/Box";
const App = () => {
  const menus = [
    {
      key: 0,
      topic: "อาหารคาว",
      imgLink:
        "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      key: 1,
      topic: "อาหารหวาน",
      imgLink:
        "https://images.theconversation.com/files/270320/original/file-20190423-15218-9to8i9.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  return (
    <div>
      <h2 className="textHeader">โหวตอาหาร</h2>
      {menus.map((menu) => {
        return (
          <Box
            key={menu.key}
            imgLink={menu.imgLink}
            topic={menu.topic}
            content={menu.content}
          />
        );
      })}
    </div>
  );
};

export default App;
