import React, { createContext, useContext, useState, ReactNode } from "react";

export type Recordatorio = {
  id: string;
  nombre: string;
  fecha: string;
  descripcion: string;
  telefono: string;
};

type RecordatorioContextType = {
  recordatorios: Recordatorio[];
  agregar: (rec: Omit<Recordatorio, "id">) => void;
  editar: (id: string, data: Omit<Recordatorio, "id">) => void;
  eliminar: (id: string) => void;
};

const RecordatorioContext = createContext<RecordatorioContextType | undefined>(undefined);

export function useRecordatorios() {
  const ctx = useContext(RecordatorioContext);
  if (!ctx) throw new Error("useRecordatorios debe usarse dentro del RecordatorioProvider");
  return ctx;
}

export function RecordatorioProvider({ children }: { children: ReactNode }) {
  const [recordatorios, setRecordatorios] = useState<Recordatorio[]>([]);

  const agregar = (rec: Omit<Recordatorio, "id">) => {
    const nuevo: Recordatorio = { ...rec, id: Date.now().toString() };
    setRecordatorios((prev) => [...prev, nuevo]);
  };

  const editar = (id: string, data: Omit<Recordatorio, "id">) => {
    setRecordatorios((prev) =>
      prev.map((r) => (r.id === id ? { ...r, ...data } : r))
    );
  };

  const eliminar = (id: string) => {
    setRecordatorios((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <RecordatorioContext.Provider value={{ recordatorios, agregar, editar, eliminar }}>
      {children}
    </RecordatorioContext.Provider>
  );
}