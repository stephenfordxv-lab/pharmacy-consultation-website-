// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="mb-4">Patients' Right Medicine Ltd. (PRMLTD) provides professional pharmaceutical consultation, medication counselling, and health education. Our mission is to empower patients with accurate information and safe medication practices.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Philosophy</h2>
      <p className="mb-4">We put patients at the centre of every interaction, ensuring confidentiality, evidence‑based advice, and convenient online access.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Core Values</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Trust & Professionalism</li>
        <li>Medication Safety</li>
        <li>Patient‑Centred Care</li>
        <li>Transparency & Confidentiality</li>
        <li>Continuous Innovation</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Pharmacist Profile (editable)</h2>
      <p className="italic text-sm">*Add the pharmacist’s name, qualifications, registration number, biography, and photo via the admin dashboard.*</p>
    </section>
  );
}
