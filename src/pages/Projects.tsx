import React from "react";
import PageLayout from "../Layouts/PageLayout";
import { projects } from "../constants/projects";

const Work = () => {
  const path = window.location.pathname;

  return (
    <PageLayout>
      <section className="flex items-stretch">
        {Object.entries(projects).map((keyVal) => {
          const project = projects[path];

          return (
            <>
              {keyVal[0] === path && project ? (
                <main className="flex flex-col flex-grow gap-20 px-32 mx-10 mb-40 overflow-auto">
                  <article className="grid gap-3 py-20 text-8xl tracking-wider font-medium border-b border-black">
                    <h4>{project.name}</h4>
                    <ul className="flex items-center gap-2">
                      {project.tools.map((tool: string, idx: number) => {
                        return (
                          <li key={idx} className="">
                            <img
                              src={`/projects/${tool}`}
                              alt={tool}
                              className="w-10 h-10"
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                  <p>{project.description}</p>
                  <img src={`/projects/${project.screenshot}`} alt="" />

                  <article className="flex items-center justify-between gap-5 py-5 w-full">
                    {project.name !== "Trello Clone" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 w-full text-center text-black font-semibold hover:bg-gray-300/20 border-b-2 border-black rounded-md"
                      >
                        LIVE
                      </a>
                    )}
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 w-full text-center font-semibold hover:bg-gray-300/20 border-b-2 border-black rounded-md"
                    >
                      CODE
                    </a>
                  </article>
                </main>
              ) : (
                <a
                  href={`${keyVal[0]}`}
                  className="grid content-start items-center px-8 text-2xl font-bold first:border-r-2 border-x-2 last:border-l-2 border-black"
                >
                  {Array.from(keyVal[1].name).map((char, index) => (
                    <span key={index} className="mx-auto">
                      {char}
                    </span>
                  ))}
                </a>
              )}
            </>
          );
        })}
      </section>
    </PageLayout>
  );
};

export default Work;
