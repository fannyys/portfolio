export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (base && (normalizedPath === base || normalizedPath.startsWith(`${base}/`))) {
    return normalizedPath;
  }

  return `${base}${normalizedPath}`;
}
