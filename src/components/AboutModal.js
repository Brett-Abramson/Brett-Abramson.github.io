const AboutModal = (props) => {
    const handleModalClick = (event) => {
        if (event.target === event.currentTarget) {
          props.toggleModal();
        }
      };

    return (
        <div className="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-zinc-950 bg-opacity-95" onClick={handleModalClick}>
            <div className="z-20 mx-6 mt-[33%] h-full shadow-slate-400 sm:mt-20 md:shadow-md">
                <div className="flex w-full flex-col justify-center rounded border-x border-y border-solid border-zinc-50 bg-zinc-800 text-slate-50 sm:m-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
                    <h2 className="text-2xl m-4 mt-8">About Me</h2>
                    <p className=""></p>
                </div>
            </div>
        </div>
    )
}

export default AboutModal