import React, { useEffect, useState } from "react";
import skeletongif from "../../assets/gif/skeleton.gif";
import restapigif from "../../assets/gif/rest.gif";

import { ProjectService } from "../../service/ProjectService";

export const CreateProject = () => {
  const [projectType, setProjectType] = useState(1);
  const [step, setStep] = useState(0);

  const [stateProjects, setStateProjects] = useState({
    newProject: {},
    isLoading: true,
    error: null,
  });

  const { newProject, isLoading, errors } = stateProjects;

  const saveProject = () => {
    console.log(stateProjects);
    let service = new ProjectService();
    service
      .saveProject(newProject)
      .then((res) => console.log(res))
      .catch((error) =>
        setStateProjects({ ...stateProjects, error, isLoading: false })
      );
  };

  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      {showModal ? (
        <>
          <div className="z-10 inset-0 overflow-y-auto">
            {JSON.stringify(step)}
            <div className="p-5">
              <div className="mx-4 p-4">
                <div className="flex items-center">
                  <div className="flex items-center text-teal-600 relative">
                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                      INIT
                    </div>
                  </div>
                  <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-300"></div>
                  <div className="flex items-center text-blue-500 relative">
                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-bookmark "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <div className="top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                      LANGUAGE
                    </div>
                  </div>
                  {projectType === 2 ? (
                    <>
                      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-300"></div>
                      <div className="flex items-center text-blue-500 relative">
                        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-mail "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        </div>
                        <div className="top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                          LINK
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-300"></div>
                  <div className="flex items-center text-blue-500 relative">
                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-database "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                        />
                      </svg>
                    </div>
                    <div className="top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                      GIT
                    </div>
                  </div>
                  <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-300"></div>
                  <div className="flex items-center text-blue-500 relative">
                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-database "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <div className="top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                      Deploy
                    </div>
                  </div>
                  <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-300"></div>
                  <div className="flex items-center text-blue-500 relative">
                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-database "
                      >
                        <path
                          fill="#fff"
                          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                        />
                      </svg>
                    </div>
                    <div className="top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                      finish
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {step == 0 ? (
                  <>
                    <div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full flex-1 mx-2">
                          <div
                            className="bg-white my-2 p-1 flex border border-gray-200 rounded h-20"
                            onClick={() => setProjectType(1)}
                          >
                            BASE
                          </div>
                          <div
                            className="bg-white my-2 p-1 flex border border-gray-200 rounded h-20"
                            onClick={() => setProjectType(2)}
                          >
                            REST
                          </div>
                        </div>
                        <div className="w-full flex-1 mx-2">
                          {projectType === 1 ? (
                            <>
                              <img
                                src={skeletongif}
                                style={{ height: "200px" }}
                              />
                            </>
                          ) : (
                            <>
                              <img
                                src={restapigif}
                                style={{ height: "200px" }}
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                {step == 1 ? (
                  <>
                    <div>
                      <p className="text-xl text-center py-4">Frontend</p>
                      <div class="flex items-center justify-center">
                        <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                          <div class="w-full">
                            <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-black">
                              <div class="flex items-center">
                                <div class="icon w-14 p-3.5 bg-green-500 text-white rounded-full mr-3">
                                <img src={require('../../assets/svg/vuejs-logo.svg')} />
                                </div>
                                <div class="flex flex-col justify-center">
                                  <div class="text-lg">Vue.js</div>
                                  <div class="text-sm text-gray-400">
                                    Javascript
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-full">
                            <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-black">
                              <div class="flex items-center">
                                <div class="icon w-14 p-3.5 bg-red-600 text-white rounded-full mr-3">
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                  </svg>
                                </div>
                                <div class="flex flex-col justify-center">
                                  <div class="text-lg">Angular</div>
                                  <div class="text-sm text-gray-400">
                                    Javascript
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="w-full">
                            <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-black">
                              <div class="flex items-center">
                                <div class="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                  </svg>
                                </div>
                                <div class="flex flex-col justify-center">
                                  <div class="text-lg">React</div>
                                  <div class="text-sm text-gray-400">
                                    Javascript
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xl text-center py-4">Backend</p>
                      <div class="flex items-center justify-center">
                        <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
                          <div class="w-full">
                            <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-black">
                              <div class="flex items-center">
                                <div class="icon w-14 p-3.5 bg-green-400 text-white rounded-full mr-3">
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                    />
                                  </svg>
                                </div>
                                <div class="flex flex-col justify-center">
                                  <div class="text-lg">Spring Boot</div>
                                  <div class="text-sm text-gray-400">
                                    Java
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="w-full">
                            <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-black">
                              <div class="flex items-center">
                                <div class="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                  </svg>
                                </div>
                                <div class="flex flex-col justify-center">
                                  <div class="text-lg">.Net Core</div>
                                  <div class="text-sm text-gray-400">
                                    C#
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="w-full">
                            <div class="widget w-full p-4 rounded-lg bg-white border-l-4 border-black">
                              <div class="flex items-center">
                                <div class="icon w-14 p-3.5 bg-red-600 text-white rounded-full mr-3">
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </div>
                                <div class="flex flex-col justify-center">
                                  <div class="text-lg">NestJS</div>
                                  <div class="text-sm text-gray-400">
                                    Javascript
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
                {step == 2 ? (
                  <>
                    <div>LINK</div>
                  </>
                ) : null}
                {step == 3 ? (
                  <>
                    <div>GIT SECTION</div>
                  </>
                ) : null}
                {step == 4 ? (
                  <>
                    <div>DEPLOY</div>
                  </>
                ) : null}
                {step == 5 ? (
                  <>
                    <div>FINALIZAR</div>
                  </>
                ) : null}
                <div className="flex justify-between p-2 mt-4 ">
                  <div className="flex rounded border-b-2 border-grey-dark overflow-hidden">
                    {step > 0 ? (
                      <>
                        <div
                          className="shadow-border p-3"
                          onClick={() => setStep(step - 1)}
                        >
                          <div className="w-4 h-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                              />
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div className="flex rounded border-b-2 border-grey-dark overflow-hidden cursor-pointer">
                    {step <= 4 ? (
                      <>
                        <div
                          className="shadow-border p-3"
                          onClick={() => setStep(step + 1)}
                        >
                          <div className="w-4 h-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
