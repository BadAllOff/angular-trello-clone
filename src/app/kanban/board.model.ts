export interface Board {
    id?: string;
    title?: string;
    priority?: number;
    tasks?: Task[];
}

export interface Task {
    description?: string;
    label?: 'yellow' | 'green' | 'blue' |'red' | 'gray' | 'purple';
}