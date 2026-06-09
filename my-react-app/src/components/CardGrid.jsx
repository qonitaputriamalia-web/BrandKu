import Card from "./Card";
const CardGrid = ({ features }) => (
    <section class="py-15">
        <h2 class="text-2xl font-bold text-center text-slate-900 mb-12">Mengapa BrandKu</h2>
        <div class="max-w-4xl mx-auto grid grid-cols-3 gap-10 px-6">
            {features.map(items => (
                <Card key={items.id} icon={items.icon} title={items.title} description={items.description} />

            ))}

        </div>
    </section>
)
export default CardGrid;