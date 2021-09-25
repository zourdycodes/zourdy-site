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
          <h1 className="text-5xl font-extrabold text-white tracking-tight sm:text-6xl">
            Hi, I'm Zourdy.{" "}
            <span role="img" aria-label="Hand Wave Emoji">
              ✋
            </span>
          </h1>
          <div className="text-2xl font-medium text-gray-300 mt-8 leading-10">
            <div className="prose prose-2xl prose-dark">
              <p>I'm a self taught programmer with around 3 years of experience 🤸‍♀️.</p>
              <p className="mt-4">
                I recently working as a front end software engineer 🎈 and also a community code
                maintainer for graphical user interfaces development at epic games (voluntarily). I
                also spending my spare time at the tracelabs.org helping out others that have been
                lost their family members or relatives to find them in no-exchange 🕵️‍♂️
              </p>
              <p className="text-2xl font-medium text-gray-300 mt-8 leading-10">
                When it comes to work-principe I always put a valuable first 💯 (what a value that
                could bring a company that I worked for growth simultaneously) rather than what the
                company could give me in-exchange.
              </p>
              <p className="text-2xl font-medium text-gray-300 mt-8 leading-10">
                I also love 🧡 spending my time practicing martial-arts, playing a chess, Hiking a
                mountain, Travelling and craving another skills like sharpening my other languages
                or even looking out another recent technology that could help me out at work. 🔰
              </p>
            </div>
            <div className="mt-24">
              <GradientHeadingText text="Business" />
            </div>
            <div className="prose prose-2xl prose-dark">
              <p>
                I run a development agency{" "}
                <a href="https://zoeble.com" target="_blank" rel="noopener noreferrer">
                  Zoeble Website Design and Development.
                </a>
              </p>
              <p>
                Lots of the projects that you see on my Youtube channel will be based from work that
                we are doing in the agency.
              </p>
            </div>
            <div className="mt-24">
              <GradientHeadingText text="Stack" />
            </div>
            <div className="prose prose-2xl prose-dark">
              <h3 className="text-xl font-bold leading-7 text-gray-200 sm:text-2xl mt-2">
                Frontend
              </h3>
              <p>
                I've been working with React for a number of years now and will use it for pretty
                much every project. Next.js is my favourite React framework and I use Tailwindcss
                for styling websites. For smaller individual projects I will use Javascript over
                Typescript.
              </p>
              <h3 className="text-xl font-bold leading-7 text-gray-200 sm:text-2xl mt-2">
                Backend
              </h3>
              <p>
                This one is dependant on the project and this changes quite a lot. For simple
                projects I've used a lot of headless CMS's and I feel my favourite is Sanity. I
                enjoy using Strapi and Keystone too.
              </p>
              <p>
                For more complex integrations I would integrate with my own database via an API.
                I've extensively used MySQL and Postgres, along with Mongodb and Firebase Firestore.
                For data that isn't heavily relational I would probably opt for either Firebase or
                Mongodb depending on complexiy. For relational data I would definitely go with
                Postgres.
              </p>
            </div>
            <div className="mt-24">
              <GradientHeadingText text="Full Stack" />
            </div>
            <div className="prose prose-2xl prose-dark">
              <p>This is what I will default to for larger applications.</p>
              <ul>
                <li>Next.js</li>
                <li>Typescript</li>
                <p className="text-gray-300">
                  I really love using Typescript on larger codebases/projects, especially when
                  working with others.
                </p>
                <li>Tailwindcss</li>
                <li>
                  Express Server (Experimenting on solely using Next API routes on current project"
                </li>
                <p className="text-gray-300">
                  The current project we're working on is built with Next.js API routes solely. This
                  is actually working very well with next-auth and Prisma.
                </p>
                <li>Postgres (AWS)</li>
                <p className="text-gray-300">Postgres DB hosted on AWS RDS.</p>
                <li>AWS S3 - Image/Video Storage</li>
                <li>Prisma - ORM</li>
                <p className="text-gray-300">
                  Huge huge fan of Prisma and I'm confident using this in production projects now.
                  Developer experience is top notch for larger scale projects and being fully typed
                  is amazing for larger projects.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </OGContainer>
    </Wrapper>
  );
}

// ✈🏕🏴‍☠️
