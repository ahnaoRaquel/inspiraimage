'use client';
import {Button} from "@/components/button";

interface ImageCardProps {
    nome?: string;
    tamanho?: number;
    dataUpload?: string;
    src?: string;
    extension?: string;
    onDelete?: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = (props: ImageCardProps) => {

    function download() {
        window.open(props.src, "_blank");
    }
    function handleDelete(e: React.MouseEvent) {
        props.onDelete?.();
    }

    return (
        <div className="card relative bg-white rounded-md shadow-md transition-transform ease-in duration-300 hover:shadow-lg hover:-translate-y-2">
            <img className="h-56 w-full object-cover rouded-t-md" alt="" src={props.src} onClick={download}/>
            <div className="card-body p-4">
                <h5 className="text-xl font-semibold mb-2 text-black">{props.nome}</h5>
                <p className="text-black text-base">{props.extension}</p>
                <p className="text-black text-base">{formatBytes(props.tamanho)}</p>
                <p className="text-black text-base">{props.dataUpload}</p>
            </div>
            <Button
                type="button"
                style="absolute bottom-3 right-3 text-black p-1 z-10"
                onClick={handleDelete}
                label={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6l-1 14H6L5 6" />
                        <path d="M10 11v6" />
                        <path d="M14 11v6" />
                        <path d="M9 6V4h6v2" />
                    </svg>
                }
            />
        </div>
    )
}

function formatBytes(bytes: number = 0, decimals = 2) {
    if (!+bytes) return "0 Bytes"

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}