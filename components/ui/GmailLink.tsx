"use client";

interface GmailLinkProps {
  email: string;
  className?: string;
}

export default function GmailLink({ email, className = "" }: GmailLinkProps) {
  const openPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    const w = 600;
    const h = 600;
    const left = Math.round(window.screenX + (window.outerWidth - w) / 2);
    const top = Math.round(window.screenY + (window.outerHeight - h) / 2);
    window.open(
      `https://mail.google.com/mail/?view=cm&to=${email}`,
      "gmail_compose",
      `width=${w},height=${h},left=${left},top=${top},resizable=yes`,
    );
  };

  return (
    <>
      {/* PC: Gmail 팝업 */}
      <a
        href={`https://mail.google.com/mail/?view=cm&to=${email}`}
        onClick={openPopup}
        className={`hidden md:inline ${className}`}
      >
        {email}
      </a>
      {/* 모바일: mailto */}
      <a href={`mailto:${email}`} className={`md:hidden ${className}`}>
        {email}
      </a>
    </>
  );
}
