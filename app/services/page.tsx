// app/services/page.tsx
import ServiceCard from '@/components/ServiceCard';

const services = [
  { title: "Pharmaceutical Consultation", desc: "One‑on‑one professional guidance.", icon: "🩺", href: "#consultation" },
  { title: "Medication Counselling", desc: "Understanding your prescriptions.", icon: "💊", href: "#counselling" },
  { title: "Drug Information Services", desc: "Evidence‑based drug data.", icon: "📚", href: "#drug-info" },
  { title: "Medication Review", desc: "Optimise therapy safely.", icon: "🔍", href: "#review" },
  { title: "Prescription Education", desc: "How to read and use prescriptions.", icon: "📝", href: "#education" },
  { title: "Patient Health Education", desc: "General health resources.", icon: "🌿", href: "/resources" },
];

export default function ServicesPage() {
  return (
    <section className="py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <ServiceCard key={s.title} title={s.title} description={s.desc} icon={s.icon} href={s.href} />
        ))}
      </div>
    </section>
  );
}
