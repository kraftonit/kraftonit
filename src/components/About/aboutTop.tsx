const AboutTop = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 relative">
            <div className="about-banner-inner">
                <div className="about-banner-content">
                    <h1 className="text-[96px] font-bold text-black max-w-[866px]">Fueling Minds Inspiring Designs..</h1>
                </div>
                <img src="https://cdn.prod.website-files.com/67288dcba6c165bf5bbf95db/67288dcba6c165bf5bbf96eb_banner-group-image.png" alt="About Us" className="about-banner-image" />
            </div>
            <div className="absolute top-[-5%] bottom-0 right-[-25%] max-w-[650px]">
                <img src="/bg/about-bg.avif" alt="About Us" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default AboutTop;