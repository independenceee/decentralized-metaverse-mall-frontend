import React, { createContext } from "react";
import { LucidContextType } from "@/types/contexts/LucidContextType";

const LucidContext = createContext<LucidContextType>(null!);

export default LucidContext;
