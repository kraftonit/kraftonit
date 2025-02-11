const AboutInnovation = () => {
    return (
        <div className="bg-black py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center text-white p-8 gap-8">
                <div className="lg:w-1/2">
                    <h1 className="text-[32px] lg:text-[54px] font-bold mb-4">KraftonIT Excellence Through Innovation.</h1>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-4 max-w-[500px]">
                    <p className="text-lg mb-6 text-[#aab0b3] text-left">
                        At KraftonIT, our journey is fired by passion—our core spark. The secret to our innovation and success?
                        It's the fusion of relentless dedication, a heart that beats for design, and a drive to innovate!
                    </p>
                    <p className="text-lg mb-8">
                        With years of experience in the field, we have honed our skills to become At our agency.
                    </p>
                    <div className="flex justify-start">
                        <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-400 transition">
                            Discover our work
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInnovation;