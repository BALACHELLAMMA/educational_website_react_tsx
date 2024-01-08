import { Client, Account } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '658e6d7d87b7d77eab8b'

const client = new Client()
    .setEndpoint(API_ENDPOINT) 
    .setProject(PROJECT_ID);    

export const account = new Account(client);

export default client;