const conf = {
       appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
       appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
       appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
       appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATBASE_ID),
       appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
}

export default conf