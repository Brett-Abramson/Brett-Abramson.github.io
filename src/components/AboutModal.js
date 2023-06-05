import Button from "./Button";

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
        <div className="flex w-full flex-col justify-center rounded border-x border-y border-solid border-zinc-50 bg-zinc-800 text-slate-50 sm:m-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
          <div className="mx-6">
            <h2 className="mt-8 text-2xl">About Me</h2>
            <div className="mb-4 w-2/3 sm:w-1/2 py-1 bg-indigo-700" />
            <p className="pb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              vulputate varius sodales. Nullam aliquam ex vitae purus rutrum
              dapibus. Ut arcu mi, rhoncus ut risus id, lobortis finibus risus.
              Donec nec felis in enim egestas pulvinar. Pellentesque porttitor
              cursus porttitor. Mauris tempor erat quis mauris dictum, sed
              placerat lacus posuere. Donec id fringilla leo. Maecenas
              scelerisque rutrum sagittis. Maecenas sodales felis eget ipsum
              maximus pellentesque. Nunc velit eros, feugiat in feugiat eget,
              interdum at tellus. Mauris ac nunc ac felis vestibulum interdum.
            </p>
            <div>
              <h4 className="my-2 text-right md:text-lg animate-pulse">Want to learn more?</h4>
              <ul className="my-4 flex justify-around">
                <li className="hover:scale-105 hover:text-white hover:underline">
                  <a
                    href="https://www.linkedin.com/in/brettmabramson/"
                    target="_blank"
                  >
                    <Button buttonText={"LinkedIN"} />
                  </a>
                </li>
                <li className="hover:scale-105 hover:text-white hover:underline">
                  <a href="https://github.com/Brett-Abramson" target="_blank">
                    <Button buttonText={"github"} />
                  </a>
                </li>
                <li className="hover:scale-105 hover:text-white hover:underline">
                  <a
                    href="https://docs.google.com/document/d/1mIJZNi9hhq4iV6RIKMfDjweFYtqGjTKJPsDaFCwXAkQ/edit#heading=h.gjdgxs"
                    target="_blank"
                  >
                    <Button buttonText={"Resume"} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
