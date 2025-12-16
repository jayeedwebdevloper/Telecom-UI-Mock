export type PackageType = 'internet' | 'minutes' | 'sms' | 'combo' | 'callRate';

export type OperatorId = 'gp' | 'robi' | 'bl' | 'airtel' | 'teletalk';

export interface OperatorInfo {
    id: OperatorId;
    name: string;
    color: string;
    logo: string; // simple emoji/letter for demo
}

export const OPERATORS: OperatorInfo[] = [
    { id: 'gp', name: 'Grameenphone', color: 'bg-blue-500', logo: 'GP' },
    { id: 'robi', name: 'Robi', color: 'bg-red-500', logo: 'R' },
    { id: 'bl', name: 'Banglalink', color: 'bg-orange-500', logo: 'BL' },
    { id: 'airtel', name: 'Airtel', color: 'bg-red-600', logo: 'A' },
    { id: 'teletalk', name: 'Teletalk', color: 'bg-green-600', logo: 'T' },
];

export interface PackageItem {
    id: string;
    operator: OperatorId;
    name: string;
    type: PackageType;
    price: number;
    validity: string;
    dataMB?: number; // internet in MB
    minutes?: number;
    sms?: number;
    callRatePaisa?: number; // e.g. 45 paisa/min
    description?: string;
}

export const PACKAGES: PackageItem[] = [
    { id: 'gp-int-2gb', operator: 'gp', name: '2GB Internet', type: 'internet', price: 50, validity: '7 Days', dataMB: 2048, description: 'High-speed 4G internet for a week.' },
    { id: 'gp-int-5gb', operator: 'gp', name: '5GB Internet', type: 'internet', price: 99, validity: '7 Days', dataMB: 5120 },
    { id: 'robi-min-250', operator: 'robi', name: '250 Minutes', type: 'minutes', price: 199, validity: '30 Days', minutes: 250 },
    { id: 'bl-combo-10g-100m', operator: 'bl', name: '10GB + 100 Min', type: 'combo', price: 299, validity: '30 Days', dataMB: 10240, minutes: 100 },
    { id: 'airtel-weekly-combo', operator: 'airtel', name: 'Weekly Combo', type: 'combo', price: 89, validity: '7 Days', dataMB: 3072, minutes: 50, sms: 50 },
    { id: 'bl-sms-500', operator: 'bl', name: '500 SMS Pack', type: 'sms', price: 30, validity: '7 Days', sms: 500 },
    { id: 'robi-callrate-45p', operator: 'robi', name: '45p/min Call Rate', type: 'callRate', price: 12, validity: '3 Days', callRatePaisa: 45, description: 'Enjoy low call rate for any local number.' },
    { id: 'teletalk-int-1gb', operator: 'teletalk', name: '1GB Internet', type: 'internet', price: 25, validity: '3 Days', dataMB: 1024 },
];

export function getOperatorInfo(id: OperatorId): OperatorInfo {
    const op = OPERATORS.find(o => o.id === id);
    if (!op) throw new Error('Operator not found');
    return op;
}

export function getPackageById(id: string): PackageItem | undefined {
    return PACKAGES.find(p => p.id === id);
}
