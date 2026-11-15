// app/resources/page.tsx
export default function ResourcesPage() {
  return (
    <section className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Health Education & Blog</h1>
      <p className="mb-4">Latest articles will appear here. Use the admin dashboard to publish, edit, and manage health‑education content.</p>
      {/* Placeholder list – replace with dynamic article cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <article className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <img src="/assets/placeholder.jpg" alt="Article thumbnail" className="w-full h-40 object-cover rounded mb-2" />
          <h2 className="text-xl font-semibold mb-1">Sample Article Title</h2>
          <p className="text-sm text-gray-600 mb-2">Brief summary of the article content...</p>
          <a href="#" className="text-gold hover:underline">Read More →</a>
        </article>
        <article className="bg-white p-4 rounded shadow hover:shadow-lg transition">
          <img src="/assets/placeholder.jpg" alt="Article thumbnail" className="w-full h-40 object-cover rounded mb-2" />
          <h2 className="text-xl font-semibold mb-1">Another Article</h2>
          <p className="text-sm text-gray-600 mb-2">Brief summary...</p>
          <a href="#" className="text-gold hover:underline">Read More →</a>
        </article>
      </div>
    </section>
  );
}
