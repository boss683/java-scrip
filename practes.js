// let color =["red","green","blule"];
// color.push("blule","yullow","bink");
// console.log(color);
// // .pop()remove that last items that array
// let hassan =["red","green","blule"];
// hassan.pop();
// console.log(hassan)
// // shift()he can remove the firest items an array
// let you=[1,2,3,4,5,6,7,8,9,10,11]
// you.pop()
// console.log(you)
// // nushift()he can adds one or more to items array 
// let add=[4,5,6,7,8,];
// add.unshift(1,2,3,);
// console.log(add);
// // indexof()he exacle tall you position of the element
// let furites=['mango','fared','orenge','apple',];
// console.log(furites.indexOf("orenge"));
// // includes() cheks the items exsites / yure of fals
// console.log(furites.includes('apple'));
// console.log(furites.includes('mahama'));

// // slice() start end copyes port of array 
// let love=[ "mama","fathoer","prother",'me']
// let herd=love.slice(2,3);
// console.log(herd);
// console.log(love);

// let nu = new Array (4).fill("hu")
// console.log(un);


// import React from "react";

// Single-file React component portfolio for Hussein Adam Hussein
// Tailwind CSS classes used for styling (assumes Tailwind is available in your project)
// Framer Motion is used for small entrance animations (import if available)

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans bg-gray-900 text-white">
      {/* Animated gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-emerald-900 via-gray-800 to-gray-900 opacity-95"
        style={{
          backgroundSize: "400% 400%",
        }}
      />

      {/* subtle floating shapes */}
      <svg
        className="pointer-events-none absolute -left-40 -top-40 opacity-20 transform rotate-45 animate-slow-spin"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#0ea5a4" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="200" fill="url(#g1)" />
      </svg>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <header className="flex items-center gap-6">
          {/* Profile photo (uses uploaded image from container path) */}
          <img
            src="/mnt/data/8c0d5fe2-68db-4240-bc34-91ffbc1013e7.png"
            alt="Hussein Adam Hussein"
            className="w-28 h-28 rounded-full object-cover ring-2 ring-white/20 shadow-lg"
          />

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Hussein Adam Hussein
            </h1>
            <p className="text-emerald-300 mt-1">Full‑Stack Developer • JavaScript | React | Node.js</p>
          </div>

          <div className="ml-auto hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-block px-4 py-2 rounded-md bg-emerald-600/90 hover:bg-emerald-500 transition"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="inline-block px-4 py-2 rounded-md border border-white/10 hover:bg-white/5 transition"
            >
              Projects
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">I build modern, reliable web applications.</h2>
            <p className="mt-4 text-gray-300 max-w-2xl">
              I'm a full-stack developer focused on building clean, maintainable, and high-performance
              web apps using modern JavaScript tools. I enjoy turning complex problems into simple,
              beautiful interfaces and robust backend systems.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="px-5 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-md border border-white/10 hover:bg-white/5 transition"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-white/5 rounded-2xl p-4 shadow-md">
              <div className="text-sm text-gray-200">Role</div>
              <div className="mt-2 font-medium text-xl">Full‑Stack Developer</div>

              <div className="mt-4 text-sm text-gray-300">
                <p>Location: Kigali, Rwanda (example)</p>
                <p className="mt-2">Availability: Open to new opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16">
          <h3 className="text-2xl font-semibold">Key Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS / Tailwind",
              "JavaScript (ES6+)",
              "React",
              "Node.js",
              "Express",
              "REST & GraphQL",
              "Postgres / MongoDB",
              "Docker",
              "Testing (Jest)"
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 bg-white/6 rounded-full text-sm border border-white/6"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Selected Projects</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <article className="p-4 rounded-xl bg-white/4 hover:scale-[1.01] transition-shadow shadow-sm">
              <h4 className="font-medium text-lg">Project One — Task Manager</h4>
              <p className="mt-2 text-gray-300 text-sm">
                Full‑stack task management app with user auth, REST API built in Node/Express and a
                React front-end. Real-time updates via WebSockets.
              </p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="px-2 py-1 bg-white/6 rounded">React</span>
                <span className="px-2 py-1 bg-white/6 rounded">Node</span>
                <span className="px-2 py-1 bg-white/6 rounded">Postgres</span>
              </div>
            </article>

            {/* Project 2 */}
            <article className="p-4 rounded-xl bg-white/4 hover:scale-[1.01] transition-shadow shadow-sm">
              <h4 className="font-medium text-lg">Project Two — E‑Commerce API</h4>
              <p className="mt-2 text-gray-300 text-sm">
                A robust e‑commerce backend with product, inventory and payment integrations. Designed
                for performance and scalability, with automated tests and CI setup.
              </p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="px-2 py-1 bg-white/6 rounded">Node</span>
                <span className="px-2 py-1 bg-white/6 rounded">Docker</span>
                <span className="px-2 py-1 bg-white/6 rounded">Stripe</span>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 mb-24">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="mt-3 text-gray-300">Email: <a href="mailto:you@example.com" className="underline">you@example.com</a></p>
          <p className="mt-1 text-gray-300">GitHub: <a href="#" className="underline">github.com/yourusername</a></p>
          <p className="mt-1 text-gray-300">LinkedIn: <a href="#" className="underline">linkedin.com/in/yourprofile</a></p>

          <form className="mt-6 max-w-xl">
            <label className="block text-sm text-gray-300">Message</label>
            <textarea className="w-full mt-2 p-3 rounded-md bg-white/5 border border-white/6 text-sm" rows={4} />
            <div className="mt-4">
              <button type="button" className="px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500">Send</button>
            </div>
          </form>
        </section>

        <footer className="text-center text-sm text-gray-400 mt-12">© {new Date().getFullYear()} Hussein Adam Hussein — Full‑Stack Developer</footer>
      </main>

      {/* Styles for animations (Tailwind doesn't include custom keyframes here) */}
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { animation: gradientBG 12s ease infinite; }
        @keyframes slowSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-slow-spin { animation: slowSpin 80s linear infinite; }
      `}</style>
    </div>
  );
}













