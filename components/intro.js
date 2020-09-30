import Section from '../components/section'

export default function section(props) {
	return (
        <Section>
    		<div className="mb-6 md:w-2/5 text-right pr-16">
    			<img src="/img/logo.jpg" alt="Le logo du Canoë Kayak Club de Feins" className="w-32 lg:w-48 ml-auto"/>
    			<h1 className="hidden">Canoë Kayak Club de Feins</h1>
    		</div>
    		<div className='text-xl leading-normal text-gray-800 content md:w-3/5'>
    			{ props.children }
    		</div>
    	</Section>
	);
}