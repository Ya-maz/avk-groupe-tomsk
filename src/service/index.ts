import { IResponseMS, IResponseMSList } from "../store/models";

const SERVER_API = "http://test-job.webatom.ru";

const getFetch = async <Type>(url: string): Promise<Type> => {
  const response = await fetch(`${SERVER_API}${url}`, );
  return await response.json();
};

export const getMoleculesList = async () => {
  return (await getFetch<IResponseMSList>("/molecules")).result;
};

export const getSaladsList = async () => {
  return (await getFetch<IResponseMSList>("/salads")).result;
};

export const getSalad = async (_id:string) => {
  return (await getFetch<IResponseMS>(`/salad/${_id}`)).result;
};

export const getMolecule = async (_id:string) => {
  return (await getFetch<IResponseMS>(`/molecule/${_id}`)).result;
};