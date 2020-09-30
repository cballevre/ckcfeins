import Section from './section'
import Left from './left'

export default function section(props) {
	return (
        <Section>
    		<Left>
    			<img src="/img/logo.jpg" alt="Le logo du Canoë Kayak Club de Feins" className="w-32 lg:w-48 md:ml-auto "/>
    			<h1 className="hidden">Canoë Kayak Club de Feins</h1>
    		</Left>
    		<div className='text-xl leading-normal text-gray-800 content md:w-3/5'>
    			{ props.children }
    		</div>
    	</Section>
	);
}