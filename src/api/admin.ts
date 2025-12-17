export type StorageMetrics = {
    usedBytes: number;
    totalBytes: number;
};

export type AdminMetrics = {
    usersTotal?: number;
    mongo?: StorageMetrics;
    r2?: StorageMetrics;
    transactionsTotal?: number;
};

/**
 * Fetch admin metrics from backend or return mock data.
 * Set VITE_ADMIN_METRICS_URL to your backend endpoint.
 * Set VITE_USE_MOCK=1 to use mock data in development.
 */
export async function fetchAdminMetrics(): Promise<AdminMetrics> {
    const useMock = import.meta.env.VITE_USE_MOCK === '1' || import.meta.env.VITE_USE_MOCK === 'true';
    const endpoint = import.meta.env.VITE_ADMIN_METRICS_URL || '/api/admin/metrics';

    if (useMock) {
        return {
            usersTotal: 12458,
            mongo: { usedBytes: 12_345_678_901, totalBytes: 50_000_000_000 },
            r2: { usedBytes: 8_765_432_109, totalBytes: 25_000_000_000 },
            transactionsTotal: 9876,
        };
    }

    try {
        const res = await fetch(endpoint, { headers: { 'Accept': 'application/json' } });
        if (!res.ok) throw new Error(`Failed to fetch metrics: ${res.status}`);
        const data = await res.json();
        // Expecting data shape compatible with AdminMetrics
        return data as AdminMetrics;
    } catch (err) {
        console.error('fetchAdminMetrics error:', err);
        // Fallback to minimal defaults so UI can render
        return {
            usersTotal: undefined,
            mongo: undefined,
            r2: undefined,
            transactionsTotal: undefined,
        };
    }
}
