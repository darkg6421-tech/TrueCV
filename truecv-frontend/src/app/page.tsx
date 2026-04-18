import Link from "next/link";

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Content",
    description: "Smart suggestions and auto-generated bullet points tailored to your industry and role.",
  },
  {
    icon: "📊",
    title: "ATS-Optimized",
    description: "Templates engineered to pass Applicant Tracking Systems and land in front of real humans.",
  },
  {
    icon: "🎨",
    title: "Professional Templates",
    description: "Choose from a curated library of modern, clean designs trusted by top recruiters.",
  },
  {
    icon: "⚡",
    title: "Instant PDF Export",
    description: "Download pixel-perfect PDFs in one click — ready to submit anywhere.",
  },
];

const steps = [
  { step: "1", title: "Pick a Template", description: "Choose from our professionally designed, ATS-friendly templates." },
  { step: "2", title: "Fill in Your Details", description: "Enter your experience — our AI helps polish every bullet point." },
  { step: "3", title: "Download & Apply", description: "Export a stunning PDF and start landing interviews." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-blue-600">True</span>CV
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#features" className="transition hover:text-blue-600">Features</a>
            <a href="#how-it-works" className="transition hover:text-blue-600">How It Works</a>
            <a href="#pricing" className="transition hover:text-blue-600">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
              Log in
            </button>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
              Get Started Free
            </button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-36">
          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Build a Resume That Actually Gets Interviews
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            TrueCV combines AI-powered content generation with ATS-optimized templates.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg">Create Your Resume</button>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                <span className="text-4xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}