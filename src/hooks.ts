import { useSelector } from "react-redux";
import { RootState } from "redux/config/configStore";

import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
