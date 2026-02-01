interface ImageCardProps {
    nome?: string;
    tamanho?: string;
    dataUpload?: string;
    src?: string;
}

export const ImageCard: React.FC<ImageCardProps> = (props: ImageCardProps) => {
    return (
        <div className="card relative bg-white rounded-md shadow-md transition-transform ease-in duration-300 hover:shadow-lg hover:-translate-y-2">
          <img className="h-56 w-full object-cover rouded-t-md" alt="" src={props.src} />
            <div className="card-body p-4">
                <h5 className="text-xl font-semibold mb-2 text-black">{props.nome}</h5>
                <p className="text-black text-base">{props.tamanho}</p>
                <p className="text-black text-base">{props.dataUpload}</p>
            </div>
        </div>
    )
}   