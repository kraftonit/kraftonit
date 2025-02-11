const AboutTop = () => {
    return (
        <div className="min-h-screen bg-gray-100 relative">
            <div className="container mx-auto">
                <div className="mb-10">
                    <h1 className="text-[96px] font-bold text-black max-w-[866px]">Fueling Minds Inspiring Designs..</h1>
                </div>
                <img src="https://cdn.prod.website-files.com/67288dcba6c165bf5bbf95db/67288dcba6c165bf5bbf96eb_banner-group-image.png" alt="About Us" className="z-10" />
            </div>
            <div className="absolute top-[-2%] bottom-0 right-[0%] max-w-[650px]">
                <img src="/bg/about-bg.avif" alt="About Us" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default AboutTop;