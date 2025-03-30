import "./index.css";

export default function App() {
    return (
        <main className="min-h-screen bg-white text-gray-900 max-w-3xl mx-auto px-4 py-10 space-y-16 font-sans">
            {/* Hero Section */}
            <section className="text-center space-y-4">
                <h1 className="text-5xl font-bold tracking-tight">Hi, I’m Howard Zhu</h1>
                <p className="text-lg text-gray-500">
                    Aspiring Quant | Developer | Finance & Data Enthusiast
                </p>
                <div className="flex justify-center flex-wrap gap-4">
                    <a
                        href="/Resume.pdf"
                        className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
                        download
                    >
                        Resume
                    </a>
                    <a
                        href="https://github.com/little-dao"
                        className="border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-100 transition"
                        target="_blank"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yinghe-zhu/"
                        className="border border-gray-300 px-5 py-2 rounded-full hover:bg-gray-100 transition"
                        target="_blank"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>

            {/* Projects */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Featured Projects</h2>
                <ul className="space-y-4">
                    <Project
                        title="Quantify"
                        desc="Auto trading strategy builder with backtesting and visualization."
                        demo="https://dorahacks.io/buidl/23040/"
                        code="https://github.com/little-dao/Quantify"
                    />
                    <Project
                        title="SEC Filing Index"
                        desc="SEC filing tool for UWaterloo researchers (WRDS alternative)."
                        demo="https://little-dao.github.io/project-pages/SEC-Index.html"
                        code="https://github.com/little-dao/sec-index-builder"
                    />
                    <Project
                        title="Non-GAAP Analyzer"
                        desc="NLP tool to identify Non-GAAP metrics in financial reports."
                        demo="https://little-dao.github.io/project-pages/Non_GAAP.html"
                    />
                </ul>
            </section>

            {/* Experience */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Experience</h2>
                <Experience
                    title="Equitable Life – External Fund Management"
                    date="Winter 2025"
                    bullets={[
                        "Oversaw $3B AUM across 50+ funds, analyzed attribution & strategy",
                        "Built Python + Power BI pipeline for Morningstar API — 80% automation gain",
                        "Wrote fund reports and presented recommendations to executives",
                    ]}
                />
                <Experience
                    title="Capital Markets Research Assistant – UW / Laurier"
                    date="2023–Present"
                    bullets={[
                        "Built custom SEC data platform (like WRDS) for faculty research",
                        "Led NLP data collection of Non-GAAP justifications from filings",
                    ]}
                />
                <Experience
                    title="CIBC – Business Analyst (Data Governance)"
                    date="Winter 2023"
                    bullets={[
                        "Built automated OSFI compliance process used by 120+ users",
                        "Designed governance tools across teams for vendor reporting",
                    ]}
                />
            </section>

            {/* Contact */}
            <section className="text-center text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Howard Zhu
            </section>
        </main>
    );
}

function Project({ title, desc, demo, code }) {
    return (
        <li className="rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-2">{desc}</p>
            <div className="flex gap-4 text-sm">
                {demo && (
                    <a href={demo} target="_blank" className="text-blue-600 underline">
                        Demo
                    </a>
                )}
                {code && (
                    <a href={code} target="_blank" className="text-blue-600 underline">
                        GitHub
                    </a>
                )}
            </div>
        </li>
    );
}

function Experience({ title, date, bullets }) {
    return (
        <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-500 mb-1">{date}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
