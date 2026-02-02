'use client';

import {Template, ImageCard, Button, InputText, useNotification, AuthenticatedPage} from "@/components";
import {useImageService} from "@/resources";
import {useEffect, useState} from "react";
import {Image} from "@/resources/image/image.resource";
import Link from "next/link";

export default function GaleriaPage() {

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([]);
    const [query, setQuery] = useState<string>("");
    const [extension, setExtension] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const notification = useNotification();


    async function searchImages() {
        setLoading(true);
        try {
            const result = await useService.buscar(query, extension);
            setImages(result);

            if (!result || result.length === 0) {
                notification.notify("Nenhuma imagem encontrada.", "warning");
            }
        } catch (error) {
            notification.notify("Erro ao buscar imagens.", "error");
        } finally {
            setLoading(false);
        }
    }

    function renderImageCard(image: Image) {
        async function handleDelete() {
            try {
                await useService.deletar(image.id || "");
                setImages(prev => prev.filter(img => img.id !== image.id));
                notification.notify("Imagem excluída com sucesso.", "success");
            } catch (error) {
                notification.notify("Erro ao excluir imagem.", "error");
            }
        }

        return (
            <ImageCard key={image.url}
                       nome={image.name}
                       src={image.url}
                       tamanho={image.size}
                       extension={image.extension}
                       dataUpload={image.uploadDate}
                       onDelete={handleDelete}/>
        )
    }

    function renderImageCards() {
        return images.map(renderImageCard);
    }

    function renderEmptyState() {
        return (
            <div className="flex flex-col items-center justify-center min-h-[300px] w-full col-span-3">
                <h2 className="text-3xl font-bold text-black text-center">
                    Busque imagens ou adicione uma nova
                </h2>
                <p className="text-gray-500 mt-2">Use a barra de pesquisa acima para começar.</p>
            </div>
        )
    }

    useEffect(() => {
        searchImages();
    }, []);

    return (
        <AuthenticatedPage>
            <Template loading={loading}>
                <section className="flex flex-col items-center justify-center my-5">
                    <div className="flex space-x-4">
                        <InputText placeholder="Digite nome ou tags" onChange={event => setQuery(event.target.value)}/>
                        <select onChange={event => setExtension(event.target.value)}
                                className="border px-4 py-2 rounded-lg text-black">
                            <option value="">Todos</option>
                            <option value="PNG">PNG</option>
                            <option value="JPEG">JPEG</option>
                            <option value="GIF">GIF</option>
                        </select>
                        <Button style="bg-black hover:bg-gray-700" onClick={searchImages} label="Buscar"/>
                        <Link href="/formulario">
                            <Button style="bg-black hover:bg-gray-700" label="Adicionar imagem"/>
                        </Link>
                    </div>
                </section>
                <section className="grid grid-cols-3 gap-4 mb-8">
                    {images.length > 0 ? (
                        renderImageCards()
                    ) : (
                        !loading && renderEmptyState()
                    )}
                </section>
            </Template>
        </AuthenticatedPage>
    )
}