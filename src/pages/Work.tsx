import React from "react";
import PageLayout from "../Layouts/PageLayout";
import { sections } from "../constants/work";

const Work = () => {
  return (
    <PageLayout>
      <main className="flex flex-col flex-grow gap-20 px-32 mx-10 mb-10 border-x-2 border-black overflow-auto">
        <h4 className="grid py-20 text-8xl tracking-wider font-medium border-b border-black">
          Uno.ai
        </h4>
        <p>
          As the only frontend engineer in the company, I am in charge of
          implementing all the UI rendering from page layouts to interactivity
          using React and Tailwind.
        </p>

        <ul className="flex flex-col flex-grow gap-5">
          {sections.map((section: any, sectionIndex) => {
            return (
              <li key={sectionIndex} className="grid xl:grid-cols-2 gap-10">
                <article className="grid content-start gap-3 py-5 pb-20 border-t-2 border-black">
                  <h4 className="uppercase text-base font-bold">
                    {section.section_name}
                  </h4>
                  <p className="text-4xl font-medium">
                    {section.section_description}
                  </p>
                  <article className="grid gap-5 pt-5">
                    {section.section_images?.map((image: string) => (
                      <article
                        className={`bg-center bg-cover ${image} h-[15rem]`}
                      ></article>
                    ))}
                  </article>
                </article>
                <article className="flex flex-col flex-grow">
                  {section.features.map(
                    (feature: any, featureIndex: number) => {
                      return (
                        <article
                          key={featureIndex}
                          className="grid gap-2 py-5 pb-20 border-t-2 border-black"
                        >
                          <h4 className="text-2xl font-bold">
                            {feature.feature_name}
                          </h4>
                          <p>{feature.feature_description}</p>
                        </article>
                      );
                    }
                  )}
                </article>
              </li>
            );
          })}
        </ul>
      </main>
    </PageLayout>
  );
};

export default Work;
