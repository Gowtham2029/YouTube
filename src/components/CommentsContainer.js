import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "Gowtham",
    text: "Hello everyone, How are you!",
    replies: [
      {
        name: "Gowtham",
        text: "Hello everyone, How are you!",
        replies: [],
      },
    ],
  },
  {
    name: "Gowtham",
    text: "Hello everyone, How are you!",
    replies: [
      {
        name: "Kishore",
        text: "Fine Gowtham!",
        replies: [
          {
            name: "Gowtham",
            text: "Hello everyone, How are you!",
            replies: [
              {
                name: "Gowtham",
                text: "Hello everyone, How are you!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Gowtham",
    text: "Hello everyone, How are you!",
    replies: [
      {
        name: "Gowtham",
        text: "Hello everyone, How are you!",
        replies: [],
      },
    ],
  },
  {
    name: "Gowtham",
    text: "Hello everyone, How are you!",
    replies: [
      {
        name: "Gowtham",
        text: "Hello everyone, How are you!",
        replies: [],
      },
    ],
  },
];

const CommentsList = ({commentsData}) => {
  return commentsData.map((c, ind) => {

    return (
    <div key={ind}>  
        <Comment data={c} />
        <div className="pl-5 ml-5 border border-l-black">
            <CommentsList commentsData={c.replies} />
            
        </div>
    </div> 
    );
  });
};

const CommentsContainer = () => {
  return (
    <div className="mx-5 my-3 p-2">
      <h1 className="text-2xl font-bold">Comments Section</h1>
      <CommentsList commentsData={comments}  />
    </div>
  );
};

export default CommentsContainer;
