import { useState } from "react";

interface FetchingResult {
    fetching: () => Promise<void>;
    isLoading: boolean;
    error: string;
}

export const useFetching = <T>(callback: () => Promise<T>): FetchingResult => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e: any) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { fetching, isLoading, error };
};
