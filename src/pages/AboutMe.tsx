import React from "react";
import PageLayout from "../Layouts/PageLayout";
import whoAmI from "../assets/about-me/who-am-i.png";

const Work = () => {
  return (
    <PageLayout>
      <main className="flex flex-col flex-grow gap-20 px-32 pb-20 mx-10 mb-10 border-x-2 border-black overflow-auto">
        <h4 className="grid py-20 text-8xl tracking-wider font-medium border-b border-black">
          <span>A LITTLE</span>
          <span>ABOUT</span>
          <span>ME</span>
        </h4>

        <section className="flex flex-col flex-grow gap-10">
          <span className="uppercase text-base font-medium">WHO AM I</span>

          <article className="grid">
            <img src={whoAmI} alt="who am i" />
            <caption className="justify-self-end py-2 uppercase text-xs">
              Behind is the paranomic view of Mexico City from the balcony of
              Chapultepec Castle
            </caption>
          </article>

          <article className="flex items-start gap-40 pb-40">
            <article className="grid gap-1">
              <h4 className="text-4xl font-medium">Kaixin Huang</h4>
              <span className="text-sm">Frontend Engineer</span>
            </article>
            <article className="grid gap-1 text-2xl">
              <span>Born in Guangzhou in 2000</span>
              <span>Immigrated to Vancouver in 2009</span>
              <span>Immigrated to Los Angeles in 2013</span>
              <span>
                Graduated from UCSD with BSc in Data Science in June 2021
              </span>
              <span>
                Found passion and motivation for frontend since August 2021
              </span>
              <span>Self-studied frontend in November 2021 for 2 months</span>
              <span>Has been working for Uno.ai since March 2022</span>
            </article>
          </article>

          <article className="grid gap-20 pb-20">
            <h4 className="text-4xl font-bold">KH</h4>

            <article className="grid justify-self-end text-xl w-96">
              <span>
                Mostly a casual personality, but with a little curiosity, a
                little desire to explore.
              </span>
              <span>Learn as I travel and meet people.</span>
            </article>
          </article>
        </section>
        <article className="grid gap-3">
          <h4 className="tracking-widest font-medium">EMAIL</h4>
          <p className="underline font-extralight tracking-wider">
            kaixin1528@gmail.com
          </p>
        </article>
        <article className="grid gap-3">
          <h4 className="tracking-widest font-medium">PHONE</h4>
          <p className="underline font-extralight tracking-wider">
            (626) 382-8126
          </p>
        </article>
      </main>
    </PageLayout>
  );
};

export default Work;
