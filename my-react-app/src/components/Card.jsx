const Card = ({ icon, title, description }) => (

   <article className="text-left">
                <div className="text-3xl mb-4">{ icon }</div>
                <h3 className="font-semibold text-slate-800 mb-2"> { title }</h3>
                <p className="text-slate-900 text-sm leading-relaxed"> { description }
                </p>
            </article>  
);
export default Card;