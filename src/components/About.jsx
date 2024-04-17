import { useState } from "react";
/*import bannerImage from "../assets/s1.jpeg";*/
const About = () => {
  const [data, setData] = useState({
    
    title: "Full Stack Web development",
    desc1: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
    illo fugit explicabo blanditiis enim quaerat dolorum fugiat
    ducimus minus ipsum.`,
    desc2: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. A
    dignissimos esse itaque impedit quas omnis odit, velit ullam
    suscipit? 
`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          
          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;