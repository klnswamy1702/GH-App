import { Client, Databases, Account } from "react-native-appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66ecf95b000036d8b13f") // Replace with your project ID
  .setPlatform('com.example.idea-tracker');


export const account = new Account(client);
export const databases = new Databases(client);
