export function formatBytes(bytes?: number): string {
    if (bytes === undefined || bytes === null || isNaN(bytes)) return '—';
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    let val = bytes;
    while (val >= 1024 && i < units.length - 1) {
        val /= 1024;
        i++;
    }
    return `${val.toFixed(val >= 100 ? 0 : val >= 10 ? 1 : 2)} ${units[i]}`;
}

export function formatNumber(n?: number): string {
    if (n === undefined || n === null || isNaN(n)) return '—';
    return new Intl.NumberFormat().format(n);
}

export function percent(used?: number, total?: number): number | undefined {
    if (!used || !total || total <= 0) return undefined;
    return Math.min(100, Math.round((used / total) * 100));
}
