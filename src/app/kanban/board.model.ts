export interface Board {
    id?: string;
    title?: string;
    prioroty?: number;
    tasks?: Task[];
}

export interface Task {
    description?: string;
    label?: 'yellow' | 'green' | 'blue' |'red' | 'gray' | 'purple';
}