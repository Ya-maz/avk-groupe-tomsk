import { IPartOrder, IResponseMS, IResponseMSList, IResponseOrder } from "../store/models";

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

export const postFetch = async (molecules: IPartOrder[]): Promise<IResponseOrder> => {
  const response = await fetch(`${SERVER_API}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(molecules),
  })
  return await response.json()
};