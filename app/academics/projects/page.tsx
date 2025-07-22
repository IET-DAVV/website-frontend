import Project from "@/components/projects/projects";

export default function ProjectsPage() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1
        className="text-center text-7xl font-extralight font-mono font-newyork"
        style={{ color: "#3B7A9E" }}
      >
        PROJECTS
      </h1>
      <h2 className="text-center mb-6 font-Manrope text-lg">
        (FOR BE IV YEAR STUDENTS)
      </h2>

      <Project />
    </main>
  );
}
