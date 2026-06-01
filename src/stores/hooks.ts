import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";   // pakai import type
import type { RootState, AppDispatch } from "./store";

// Hook typed untuk dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Hook typed untuk selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
