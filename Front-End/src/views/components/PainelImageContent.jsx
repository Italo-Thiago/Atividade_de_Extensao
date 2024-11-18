export const PainelImageContent = () => {
    return (
        // Container Principal
        <div className="flex w-full items-center gap-12 p-16 relativa bg-gray-200">

            {/* Container para o texto */}
            <div className="w-1/2 gap-6 flex flex-col items-start relative">

                {/* Cabeçalhos */}
                <div className="gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                    <div className="relative self-stretch mt-[-1px] font-bold text-gray-800 text-[36px] tracking-[-0.5px] leading-[1.2] font-sans">
                        Quem somos.
                    </div>

                    <div className="relative self-stretch font-semibold text-gray-600 text-[28px] tracking-[0.25px] leading-[1.4] font-sans">
                        Não so uma empresa de bolos.
                    </div>
                </div>

                {/* Corpo do texto */}
                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                    <p className="text-ju relative flex-1 mt-[-1px] font-normal text-gray-800 text-[18px] tracking-[0px] leading-[1.5] font-sans">
                        Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
                    </p>
                </div>

                {/* Corpo do texto adicional */}
                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                    <p className="text-justify relative flex-1 mt-[-1px] font-normal text-gray-800 text-[18px] tracking-[0px] leading-[1.5] font-sans">
                        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui&nbsp;&nbsp;international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                    </p>
                </div>
            </div>

            {/* Imagem ao lado */}
            <div className="relative w-1/2 h-96 bg-white bg-cover bg-center"/>
        </div>
    );
};
