import type { IconKey } from '../assets/utils/simulationPrep';

export interface SimParamInputProps {
    icon: IconKey;
    placeholder: string;
    hintText: string;
}

// values accepted as simulation state
export type SimStatusType =
    | 'not ready'
    | 'ready'
    | 'ongoing'
    | 'finished'
    | 'cancelled';
