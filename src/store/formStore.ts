import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type Field =
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'role'
    | 'mode'
    | 'followings'
    | 'cv';

interface Form {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    role: string | null;
    mode: string | null;
    followings: string[] | [];
    cv: string | null;

    // setField: (field: Field, value: string | string[] | []) => void;
    setField: (field: Partial<Omit<Form, 'setField'>>) => void;
}

export const useFormStore = create<Form>()(
    immer((set, get) => ({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        role: null,
        mode: null,
        followings: [],
        cv: null,

        setField: (field) => {
            const fields = Object.entries(field);
            fields.forEach((fieldItem) => {
                const [name, value] = fieldItem;
                set((state) => {
                    state[name] = value;
                });
            });

            console.log({ ...get() });
        },
    }))
);
