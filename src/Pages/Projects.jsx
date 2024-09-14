// import { useState, useRef, useMemo } from "react";
// import JoditEditor from "jodit-react";

// const Projects = ({ placeholder }) => {
//   const editor = useRef(null);
//   const [content, setContent] = useState("");

//   const config = {
//     height: "400px",

//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(content);
//     setContent("")
//   };

//   return (

//     <div className="text-3xl">
//       <div className="bg-sky-100 p-10 rounded-md">
//         <h3 className="text-3xl font-semibold text-center">
//           Add Your Project Details
//         </h3>
//         <p className=" text-[20px] text-center mb-5">
//           You can easily add project details form here.
//         </p>
//         <form action="" className="flex flex-col">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             placeholder="Enter Title..."
//             className="mt-2 mb-2 border-2 border-gray-500 outline-none rounded-md px-2 py-2"
//           />
//           <label htmlFor="textarea" className="mt-2 mb-2">
//             Description{" "}
//           </label>
//           {/* <textarea
//             id="editor"
//             name="editor"
//             placeholder="Description..."
//             className="border-2 border-gray-500 outline-none rounded-md px-2 py-2 mb-5 h-52"
//           ></textarea> */}
//           <JoditEditor
//             ref={editor}
//             value={content}
//             config={config}
//             tabIndex={1} // tabIndex of textarea
//             onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
//             onChange={(newContent) => {}}
//           />
//           <button
//             type="submit"
//             className="bg-green-500 text-white font-semibold px-5 py-3 w-52 mx-auto rounded-md mt-3 text-center"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </form>
//         <div dangerouslySetInnerHTML={{__html:content}} ></div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const projectData = JSON.parse(localStorage.getItem("projectData"));
    setData(projectData);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p>Projects are {data?.length < 0 ? "" : "not"} available</p>
        </div>
        <div>
          <Link to={"/add-project"}>
            <button className="text-white bg-green-500 px-5 py-2 rounded-md font-semibold">
              Add Project
            </button>
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Banner
              </th>
              <th scope="col" className="px-6 py-3">
                Project name
              </th>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <>
                <tr>
                  {" "}
                  <td className="px-6 py-4">
                    <img
                      src={item?.image}
                      alt=""
                      className="w-32 h-24 rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4">{item?.title}</td>
                  <td className="px-6 py-4">{item?.description}</td>
                  <td className="px-6 py-4">{item?.category}</td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
