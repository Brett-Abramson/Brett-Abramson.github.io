import Link from "next/link";
import Button from "./Button";
import ContactForm from "./contact/ContactForm";

const AboutModal = (props) => {
  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      props.toggleModal();
    }
  };

  return (
    <div
      className="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-zinc-950 bg-opacity-95"
      onClick={handleModalClick}
      id="aboutMe"
    >
      <div
        className="z-20 mx-4 mt-[33%] h-full shadow-slate-400 sm:mt-20 md:shadow-md"
        onClick={handleModalClick}
      >
        <div className="flex w-full flex-col justify-center rounded border-x border-y border-solid border-zinc-50 bg-zinc-800 text-slate-50 sm:m-auto  md:max-w-lg lg:max-w-3xl lg:pb-4">
          <div className="mx-5">
            <h2 className="mt-8 text-2xl">About Me</h2>
            <div className="mb-4 w-2/3 bg-indigo-700 py-1 sm:w-1/2" />
            <ul className="my-4 mx-4 flex justify-between sm:justify-around lg:my-8">
              <li className="hover:scale-105 hover:text-white hover:underline">
                <Link
                  href="https://www.linkedin.com/in/brettmabramson/"
                  target="_blank"
                >
                  <Button buttonText={"LinkedIN"} />
                </Link>
              </li>
              <li className="hover:scale-105 hover:text-white hover:underline">
                <Link href="https://github.com/Brett-Abramson" target="_blank">
                  <Button buttonText={"github"} />
                </Link>
              </li>
              <li className="hover:scale-105 hover:text-white hover:underline">
                <Link
                  href="https://docs.google.com/document/d/1mIJZNi9hhq4iV6RIKMfDjweFYtqGjTKJPsDaFCwXAkQ/edit#heading=h.gjdgxs"
                  target="_blank"
                >
                  <Button buttonText={"Resume"} />
                </Link>
              </li>
            </ul>
            <h4 className="font-bold">Short Story:</h4>
            <p className="mx-4 pb-4 indent-4">
              I am a software developer based in Austin, Texas driven by the art
              of crafting code that harmonizes seamlessly with project goals. As
              well as a coder, I am also an avid brewer and musician. What truly
              fascinates me is the common thread running through these passions.
              Whether it&apos;s evoking emotions through music, creating
              delectable libations through brewing, or designing intuitive and
              efficient applications, they all thrive on distinct and intricate
              processes, each demanding nuanced approaches to acheive
              excellence.
            </p>
            <details>
              <summary className="cursor-pointer font-bold">Long Story</summary>
              <p className="mx-4 pb-4 pt-4 indent-6 text-sm">
                Hello! Thank you for taking the time to get to know me better. I
                grew up in the San Francisco Bay Area before an unexpected twist
                of fate led me to Austin, Texas in 2014. Originally, my sights
                were set on North Carolina, a place reminiscent of the
                environment I cherished back home - abundant trees, majestic
                mountains, and the proximity to the ocean. However, life had
                other plans; car troubles and financial constraints meant I was
                grounded in Austin for a while. As time went on, my North
                Carolina dream faded, and I found happiness in Austin&apos;s
                vibrant atmosphere.
              </p>
              <p className="mx-4 pb-4 text-sm">
                Before embarking on this journey, I gained valuable experience
                working in a family restaurant on Fisherman&apos;s Wharf. There,
                I played a pivotal role in modernizing the computer systems by
                installing and configuring new POS software. My passion for
                tinkering with computer systems was a constant in my life, and
                even during my earlier years, I was the go-to tech expert for
                friends and family. After completing my degree in Liberal
                Studies with a focus on Multi-disciplinary Ethnic Studies at San
                Francisco State University, I took some time to explore
                different career paths. For the past eight years, I&apos;ve been
                a bartender at events and weddings in Austin, which allowed me
                to pursue my other interests, such as playing in a band and
                brewing beer. During the COVID pandemic, my enthusiasm for
                computers and coding reignited. After several years of
                self-study and consulting with friends already working as
                developers, I made the decision to take the plunge and enroll in
                a coding boot camp.
                <br />
                <br />
                When I&apos;m not engrossed in keyboard activities, you&apos;ll
                likely find me immersed in music, crafting homemade brews, or
                embracing outdoor adventures.
              </p>
            </details>

            <div>
              <h4 className="my-4 mr-8 animate-pulse text-right md:mr-12 md:text-lg lg:mr-16">
                Connect!
              </h4>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;

// Hailling from
