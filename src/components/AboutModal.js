const AboutModal = (props) => {
    const handleModalClick = (event) => {
        if (event.target === event.currentTarget) {
          props.toggleModal();
        }
      };

    return (
        <div className="fixed left-0 top-0 z-10 h-full w-full overflow-auto bg-zinc-950 bg-opacity-95" onClick={handleModalClick}>

        </div>
    )
}

export default AboutModal