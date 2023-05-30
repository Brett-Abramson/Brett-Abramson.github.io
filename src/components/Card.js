const { useState } = require("react")

const ResponsiveCard = () => {
    const [flipCard, setFlipCard] = useState(false)

    const toggleCard = () => {
        setFlipCard(!flipCard)
    }

    return (
        <div className="h-full shadow-slate-400 md:shadow-md">
            <div className="m-auto flex w-full flex-col rounded-sm border-x border-y sm:border-solid sm:border-zinc-800 md:max-w-xl md:flex-row lg:max-w-4xl lg:border-none xl:max-w-6xl">

            </div>
        </div>
    )
}

export default ResponsiveCard