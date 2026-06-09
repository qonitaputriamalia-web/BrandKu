import "react"

const WhyUs = () => (

    <section className="py-15">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">Mengapa BrandKu</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-10 px-6">
            <article className="text-left">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-semibold text-slate-800 mb-2">Mudah digunakan</h3>
                <p className="text-slate-900 text-sm leading-relaxed">Tidak perlu keahlian teknis.setup dalam 5 menit
                </p>
            </article>
            <article className="text-left border-l border-slate-300 pl-10">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="font-semibold text-slate-800 mb-2">Serba otomatis</h3>
                <p className="text-slate-900 text-sm leading-relaxed">Otomatiskan tugas berulang dan fokus pada hal yang
                    penting </p>
            </article>
            <article className="text-left border-l border-slate-300 pl-10">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="font-semibold text-slate-800 mb-2">Laporan Real-Time</h3>
                <p className="text-slate-900 text-sm leading-relaxed">Pantau performa bisnismu kapan saja dan di mana
                    saja</p>
            </article>
        </div>
    </section>


)

export default WhyUs