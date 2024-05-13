export default function HowBy({ img, number, title, text }) {
    return (
        <>
            <div className="flex sm:flex-col items-start justify-start">
                <div className="">
                    <img src={img} alt="" />
                </div>

                <div className="ml-[70px] sm:ml-[0px] sm:mt-[40px]">
                    <div className="flex mb-[12px] items-center">
                        <div className="border-r h-[70px] flex items-center">
                            <p className="text-[#01CD7D] text-[70px] pr-[46px]">{number}</p>
                        </div>
                        <h3 className="pl-[33px] sm:text-[16px] dark:text-[white] text-[18px] w-[353px]">{title}</h3>
                    </div>
                    <p className="text-[16px] w-[850px] sm:w-[340px] md:w-auto sm:text-[14px] sm:leading-6 leading-[36px] dark:text-[white]">{text}</p>
                </div>
            </div>
        </>
    )
}