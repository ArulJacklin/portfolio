export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6">

      {/* HERO */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-2">Arul Jackline J</h1>
        <p className="text-xl">Software Engineer | Python | Django | Automation</p>

        <div className="mt-4 space-x-4">
          <a href="mailto:jacklin23a@gmail.com" className="underline">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/aruljacklin2308/"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg mb-6 hover:scale-105 transition">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          Software Engineer experienced in building backend systems using Django,
          REST APIs, and automation tools. Passionate about improving workflows
          and delivering scalable solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg mb-6 hover:scale-105 transition">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Python",
            "Django",
            "DRF",
            "FastAPI",
            "JavaScript",
            "Tailwind",
            "PostgreSQL",
            "MongoDB",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-white/20 px-3 py-1 rounded-full text-center hover:bg-white/40 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg mb-6 hover:scale-105 transition">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>

        <div className="mb-4">
          <h3 className="font-bold text-lg">Software Engineer - SolidPro</h3>
          <p className="text-sm mb-2">June 2024 – Present</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Django & DRF backend development</li>
            <li>Automation using Python</li>
            <li>PostgreSQL database design</li>
            <li>API optimization & debugging</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">Domino CX Project</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Customer data analysis</li>
            <li>Automation workflows</li>
            <li>Salesforce dashboards</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2">📧 jacklin23a@gmail.com</p>
        <p>📞 +91 8754713780</p>
      </section>

    </div>
  );
}