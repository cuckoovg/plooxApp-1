export interface OrderType { 
    identifier: 'takeaway' | 'delivery' | 'dinein' | 'ojek';  
    label: string;
    selected: boolean;
    icon: string;
};