import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Projects = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    height: "400px",
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
    setContent("")
  };

  return (
    <div className="text-3xl">
      <div className="bg-sky-100 p-10 rounded-md">
        <h3 className="text-3xl font-semibold text-center">
          Add Your Project Details
        </h3>
        <p className=" text-[20px] text-center mb-5">
          You can easily add project details form here.
        </p>
        <form action="" className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter Title..."
            className="mt-2 mb-2 border-2 border-gray-500 outline-none rounded-md px-2 py-2"
          />
          <label htmlFor="textarea" className="mt-2 mb-2">
            Description{" "}
          </label>
          {/* <textarea
            id="editor"
            name="editor"
            placeholder="Description..."
            className="border-2 border-gray-500 outline-none rounded-md px-2 py-2 mb-5 h-52"
          ></textarea> */}
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {}}
          />
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold px-5 py-3 w-52 mx-auto rounded-md mt-3 text-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <div dangerouslySetInnerHTML={{__html:content}} ></div>
      </div>
    </div>
  );
};

export default Projects;
