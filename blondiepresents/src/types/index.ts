export interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface Event {
    id: number;
    title: string;
    slug: string;
    description: string;
    start_date: string;
    end_date: string;
    venue_id: number;
    created_at: string;
    updated_at: string;
    venue?: Venue;
    tickets?: Ticket[];
    categories?: Category[];
}

export interface Venue {
    id: number;
    name: string;
    slug: string;
    description: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    latitude: number;
    longitude: number;
    created_at: string;
    updated_at: string;
    events?: Event[];
}

export interface Ticket {
    id: number;
    event_id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    start_sale: string;
    end_sale: string;
    created_at: string;
    updated_at: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
}

export interface ApiResponse<T> {
    data: T;
    meta?: {
        current_page: number;
        from: number;
        last_page: number;
        path: string;
        per_page: number;
        to: number;
        total: number;
    };
}