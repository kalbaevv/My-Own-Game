import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../store";

export const useAppDispatch: () => appDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
