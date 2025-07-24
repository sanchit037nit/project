import conf from '../conf.js'
import { Client, ID,Databases,Storage,Query} from "appwrite";

export class Service{
    client = new Client()
    databses;
    bucket;

    constructor(){
        this.client
                    .setEndpoint(conf. appwriteUrl)
                    .setProject(conf.appwriteProjectId)
        this.databses= new Databases(this.client)
        this.bucket= new Storage(this.client)
    }

    async CreatePost({
     title,slug,content,featuredimage,status,userid
    }){
        try {
            return await this.databses.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //slug as documentid
                {
                    title,content,featuredimage,status,userid
                }
            )
        } catch (error) {
            throw error
        }
    }

    async UpdatePost(slug,{
     title,content,featuredimage,status,userid
    }){
        try {
            return await this.databses.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //slug as documentid
                {
                    title,content,featuredimage,status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async DeletePost(slug){
        try {
           await this.databses.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

    async getPost(slug){
        try {
           await this.databses.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw error
            return false
        }
    }

      async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service() 
export default service