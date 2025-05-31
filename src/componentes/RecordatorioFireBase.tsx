import { Recordatorio } from "../ApiDatos/RecordatorioContext";
import { db } from "../Firebase/config";
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";

const COLLECTION = "recordatorios";

export async function agregarRecordatorio(data: Omit<Recordatorio, "id">) {
  const docRef = await addDoc(collection(db, COLLECTION), data);
  return docRef.id;
}

export async function obtenerTodosRecordatorios() {
  const snapshot = await getDocs(collection(db, COLLECTION));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Recordatorio[];
}

export async function obtenerRecordatorioPorId(id: string) {
  const docSnap = await getDoc(doc(db, COLLECTION, id));
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() } as Recordatorio;
  return null;
}

export async function editarRecordatorio(id: string, data: Omit<Recordatorio, "id">) {
  await updateDoc(doc(db, COLLECTION, id), data);
}

export async function eliminarRecordatorio(id: string) {
  await deleteDoc(doc(db, COLLECTION, id));
}