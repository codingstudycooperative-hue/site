export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}

export function formatDate(dateStr: string): string {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateStr));
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{4})(\d{3,4})(\d{4})/, "$1-$2-$3");
}
