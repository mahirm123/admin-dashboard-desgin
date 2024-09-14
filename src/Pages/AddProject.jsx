import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("projectData")) || [];
    const newData = {
      id: Date.now(),
      title,
      details,
      category,
      image,
    };
    const newEntryData = [...existingData, newData];
    localStorage.setItem("projectData", JSON.stringify(newEntryData));
    navigate("/projects");
    form.reset();
  };

  return (
    <div>
      <div className="flex items-center justify-between px-5 mb-10 ">
        <div>
          <h2 className="text-2xl font-semibold">Add Project</h2>
          <p>You can add project detail from here...</p>
        </div>
        <button
          className="text-white bg-black px-8 py-2 font-semibold rounded-md"
          onClick={() => history.back()}
        >
          Go Back
        </button>
      </div>
      <form className="w-full lg:w-1/2 mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Enter project Title..."
            className="px-2 py-2 border border-gray-500 rounded-md"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="details">Details</label>
          <textarea
            rows={5}
            type="text"
            placeholder="Enter project details..."
            className="px-2 py-2 border border-gray-500 rounded-md"
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="category">Categories</label>
          <select
            className="border-2 border-gray-500 p-2 rounded-md"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled>Select Category</option>
            <option value="category_one"> Category 1</option>
            <option value="category_two"> Category 2</option>
            <option value="category_three"> Category 3</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </div>
        <div className="mt-5 w-10 mx-auto">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
