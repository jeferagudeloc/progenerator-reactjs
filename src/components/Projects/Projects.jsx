import React, { useEffect, useState } from "react";
import { CreateProject } from "../CreateProject/CreateProject";
import { ProjectList } from "../ProjectList/ProjectList";

export const Projects = () => {

  const [addNewProject, setAddNewProject] = useState(false);

  return (
    <div class="py-3 bg-white container px-4">
      <div className="mt-8 mr-8">
        <div className="flex justify-end">
          <button
            className="px-2 py-1 border border-transparent rounded-md text-black bg-gray-200 hover:bg-gray-400"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => setAddNewProject(!addNewProject)}
          >
            Agregar
          </button>
        </div>
      </div>
      {addNewProject ? (
        <>
          <CreateProject />
        </>
      ) : (
        <>
          <ProjectList />
        </>
      )}
    </div>
  );
};
