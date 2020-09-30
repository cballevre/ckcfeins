export default function section(props) {
	return (
		<section className="pb-12 p-6 flex flex-col md:flex-row">
    		<div className="mb-6 md:w-2/5">
    			<img src="/img/logo.jpg" alt="Le logo du Canoë Kayak Club de Feins" class="w-32 lg:w-48"/>
    			<h1 class="hidden">Canoë Kayak Club de Feins</h1>
    		</div>
    		<div className='text-lg leading-normal text-gray-900 section-content md:w-3/5'>
    			{ props.children }
    		</div>
    	</section>
	);
}