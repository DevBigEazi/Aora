import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
} from "react-native-appwrite";

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.bigeazi.aora",
    projectId: "66a7a07a001f28afff1d",
    databaseId: "66a7a41f003b5796b248",
    userCollectionId: "66a7a4ef0034a0142713",
    videoCollectionId: "66a7a53400169d625841",
    storageId: "66a7a8970007a2f97797",
};

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

// Register User
export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;

        const avatarUrl = await avatar.getInitials(username);

        await signIn(email, password);

        const newUser = await database.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export const signIn = async (email, password) => {
    try {

        // Check if there is an active session
        const currentSession = await account.getSession('current');

        // If a session is active, delete it
        if (currentSession) {
            await account.deleteSession('current');
        }

        // Create a new session
        const session = await account.createEmailPasswordSession(email, password);

        if (!session) throw Error;

        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export const getCurrentUser = async () => {
    try {
        const currentAcct = await account.get();

        if (!currentAcct) throw Error;

        const currentUser = await database.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal("accountId", currentAcct.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};
