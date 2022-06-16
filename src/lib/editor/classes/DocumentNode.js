import { nanoid } from "nanoid";

export async function loadDocumentNode(projectId, documentId) {
    return null;
}

export async function saveDocumentNode(projectId, documentId) {
    return null;
}

export default class DocumentNode {
    constructor(title="Untitled Document") {
        this.id = nanoid();
        this.content = "";
        this.title = title;
        this.childDocuments = [];
    }
}