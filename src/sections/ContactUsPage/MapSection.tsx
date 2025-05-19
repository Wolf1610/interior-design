// app/components/MapSection.tsx
"use client";

export default function MapSection() {
  return (
    <section className="container w-full h-auto py-10 px-4 pb-20">
      <div className="max-w-8xl mx-auto rounded overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10963.521275017143!2d85.83812724918572!3d19.800068335757853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c406abfd8eaf%3A0x5b6f8b3655a4cf85!2sPuri%20Beach!5e1!3m2!1sen!2sin!4v1747632656151!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
