function HeroImage() {
    return (
        <div className="flex flex-col w-full items-center justify-center gap-8 pt-40 pr-6 pb-40 pl-6 relative bg-slate-200 bg-[url('https://static01.nyt.com/images/2023/10/27/multimedia/27cakerex-plzm/27cakerex-plzm-master768.jpg?quality=75&auto=webp')] bg-cover bg-center">
            <div className="inline-flex flex-col items-center gap-2 relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1px] font-[700] text-black text-[72px] text-center tracking-[-2.16px] leading-[1.2] font-sans">
                    Bolo
                </div>
                <div className="relative self-stretch font-[400] text-black text-[32px] text-center tracking-[0px] leading-[1.2] font-sans">
                    Gostoso
                </div>
            </div>
        </div>
    )
}

export default HeroImage;