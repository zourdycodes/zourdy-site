/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-unescaped-entities */
import GradientHeadingText from "../components/GradientHeadingText";
import OGContainer from "../components/OGContainer";
import Wrapper from "../components/Wrapper";

export default function About() {
  return (
    <Wrapper>
      <OGContainer description="About Muhammad Zourdy - Front End Software Engineer">
        <div className="mt-8 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Hi, I'm Zourdy.{" "}
            <span role="img" aria-label="Hand Wave Emoji">
              ✋
            </span>
          </h1>
          <div className="mt-8 text-2xl font-medium text-gray-300 leading-10">
            <div className="prose prose-2xl prose-dark">
              <p>I'm a self taught programmer with around 3 years of experience 🤸‍♀️.</p>
              <p className="mt-4">
                I recently working as a front end software engineer 🎈 and also a community code
                maintainer for graphical user interfaces development at epic games (voluntarily). I
                also spending my spare time at the tracelabs.org helping out others that have been
                lost their family members or relatives to find them in no-exchange 🕵️‍♂️
              </p>
              <p className="mt-8 text-2xl font-medium text-gray-300 leading-10">
                When it comes to work-principe I always put a valuable first 💯 (what the exact
                value that I could give in to bring a company that I worked for growth
                simultaneously) rather than what the company could give me in-exchange.
              </p>
              <p className="mt-8 text-2xl font-medium text-gray-300 leading-10">
                I also love 🧡 spending my time practicing martial-arts, playing a chess, Hiking a
                mountain, Travelling, reading a book and craving another skills like sharpening my
                french languages or even looking out another recent technology that could help me
                out at work. 🔰
              </p>
            </div>

            <div className="mt-24">
              <GradientHeadingText text="Future Plan" />
              <p className="underline">
                I currently building out a SaaS application which in the near future I will launch
                it as my first brushes building my own start-up company 🎯
              </p>
            </div>

            <div className="mt-24">
              <GradientHeadingText text="Tech Stack" />
            </div>
            <div className="prose prose-2xl prose-dark mt-4">
              <p>
                Despite I really not use them as the same time on a daily basis but I currently
                building out a SaaS application which apparently will uses most of the technology
                that I put on to this line 🔰.
              </p>
              <ul>
                <li className="underline">Next JS</li>
                <li className="underline">Vue JS</li>
                <li className="underline">Typescript</li>
                <li className="underline">Golang</li>

                <li className="underline">Tailwind CSS</li>
                <li className="underline">SASS/LESS</li>
                <li className="underline">
                  Express Server (Experimenting on solely using Next API routes on current project"
                </li>
                <li className="underline">Node JS</li>

                <li className="underline">PostgreSQL</li>
                {/* <p className="text-gray-300">Postgres DB hosted on AWS RDS.</p> */}
                <li className="underline">AWS S3 - Image/Video Storage</li>
                <li className="underline">Prisma - ORM</li>
                {/* <p className="text-gray-300">
                  Huge huge fan of Prisma and I'm confident using this in production projects now.
                  Developer experience is top notch for larger scale projects and being fully typed
                  is amazing for larger projects.
                </p> */}
              </ul>
            </div>
          </div>
        </div>
      </OGContainer>
    </Wrapper>
  );
}

// ✈🏕🏴‍☠️
