import { Editor } from "./editor";

interface DocumentParams{
    params : Promise<{documentId : string}>;
}

const DocumentPageById = async ({params} : DocumentParams)=>{
    const { documentId } = await params;
    return(
        <div className="min-h-screen bg-[#FAFBFD]">
            <Editor/>
        </div>
    )
}

export default DocumentPageById;