interface PageBannerProps {
  title: string;
  subtitle: string;
  description?: string;
}

export default function PageBanner({
  title,
  subtitle,
  description,
}: PageBannerProps) {
  return (
    <div className="bg-slate-900 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-xl sm:text-2xl text-slate-300 mb-3">{subtitle}</p>
        {description && (
          <p className="text-slate-400 max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
}
