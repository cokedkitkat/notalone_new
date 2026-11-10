type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`w-full py-20 sm:py-28 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
