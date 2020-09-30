import Section from '../components/section'

export default function content(props) {
	
	return (
		<Section index={props.index}>
			<div className='mb-6 md:w-2/5 text-right pr-16'>
    			<h2 className='text-xl font-bold text-black'>{ props.title }</h2>
    		</div>
    		<div className='text-lg leading-normal text-gray-800 content md:w-3/5'>
    			{ props.children }
    		</div>
    	</Section>
	);
}