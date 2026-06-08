import "react"

const Hero = () => (

    <section className="bg-slate-100 py-25">
        <h1 className="text-center text-4xl font-extrabold text-slate-900 pb-3">Solusi Terbaik Untuk Bisnismu</h1>
        <p className="text-center text-slate-500 text-sm pb-5">Platform all-in-one untuk manajemen, pemasaran, dan
            pertumbuhan bisnis kecil.</p>
        <div className="text-center">
            <button id="cta-btn"
                className="bg-purple-800 text-white rounded-full px-6 py-2 cursor-pointer font-bold hover:bg-purple-900 focus:outline-3 focus:outline-offset-2 focus:outline-purple-500">Mulai
                Gratis</button>
            <p id="cta-feedback" className="mt-4 text-blue-600 font-medium hidden"></p>
        </div>
    </section>

)

export default Hero