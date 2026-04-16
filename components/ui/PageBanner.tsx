interface PageBannerProps {
  title: string;
  subtitle: string;
  description?: string;
  subdescription?: string;
}

export default function PageBanner({
  title,
  subtitle,
  description,
  subdescription,
}: PageBannerProps) {
  return (
    <div className="pt-28 pb-14 px-6 bg-slate-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <span className="text-primary-600 text-xs font-semibold uppercase tracking-widest">
          {title}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 leading-tight">
          {subtitle}
        </h1>
        {description && (
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        {subdescription && (
          <p className="text-slate-600 text-base max-w-2xl mt-5 leading-relaxed">
            {subdescription}
          </p>
        )}
      </div>
    </div>
  );
}
