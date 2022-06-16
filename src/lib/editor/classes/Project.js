import DocumentNode from "./DocumentNode";

export async function loadProject() {
    let output = await window.electronAPI.loadProject();
    let project = parserProject(output);
    return project;
}

export async function saveProject(project) {
    window.electronAPI.saveProject(project);
}

function parserProject(json) {
    let project = new Project();
    project.id = json.id;
    project.rootDocumentNode = buildDocumentNode(json.rootDocumentNode);
    return project;
}

function buildDocumentNode(docNode) {
    let documentNode = new DocumentNode();
    documentNode.id = docNode.id;
    documentNode.title = docNode.title;
    documentNode.content = docNode.content;

    docNode.childDocuments.forEach(element => {
        documentNode.childDocuments.push(buildDocumentNode(element));
    });

    return documentNode;
}

export default class Project {
    constructor(rootDocumentNode) {
        this.id = "fsdaffasdfasdfsad";
        this.rootDocumentNode = rootDocumentNode;
    }

    findDocumentById(id) {

        let searchQueue = [];
        searchQueue.push(this.rootDocumentNode);

        while(searchQueue.length > 0) {
            const currentDocument = searchQueue.shift();
            if(currentDocument.id === id) {
                return currentDocument;
            }

            currentDocument.childDocuments.forEach(element => {
                searchQueue.push(element);
            });
        }

        return null;
    }
}