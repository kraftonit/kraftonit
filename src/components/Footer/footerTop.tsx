const FooterTop = () => {
    return (
        <div className="bg-black text-white py-10">
            <div className="mx-auto flex flex-col md:flex-row justify-between">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-3xl font-bold">KraftonIT</h1>
                        <p className="mt-2">An Experience Design Agency focusing on building functional, simple, human-centered digital products for future.</p>
                        <button className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded">Contact us now</button>
                    </div>

                    <div>
                        <h2 className="font-semibold">SERVICES</h2>
                        <ul>
                            <li>Web Design</li>
                            <li>Branding</li>
                            <li>Webflow</li>
                            <li>MVP Development</li>
                            <li>SaaS Design</li>
                            <li>Mobile App</li>
                            <li>Design System</li>
                            <li>Startup MVP</li>
                            <li>MVP Web</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold">QUICK LINK</h2>
                        <ul>
                            <li>Work</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Pricing</li>
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold">REVIEW</h2>
                        <ul>
                            <li>Clutch</li>
                            <li>Good Firms</li>
                            <li>Design Rush</li>
                            <li>Behance</li>
                            <li>Dribbble</li>
                            <li>Webflow</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center">
                <p>© {new Date().getFullYear()}, KraftonIT | All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default FooterTop;
