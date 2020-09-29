import Head from 'next/head'
import Section from '../components/section'

export default function Home() {
  return (
    <div>
    	<section class="p-6 flex flex-col md:flex-row">
    		<div class="md:w-2/5 lg:2/4 mb-6 md:mb-0 max-w-screen-sm">
    			<img src="/img/logo.jpg" alt="Le logo du Canoë Kayak Club de Feins" class="w-32 lg:w-48"/>
    			<h1 class="hidden">Canoë Kayak Club de Feins</h1>
    		</div>
    		<div class="md:w-3/5 lg:2/4 max-w-screen-sm text-xl leading-normal text-gray-700">
    			<p class="mb-4">Bienvenue sur le site du <b class="text-black">Canoë Kayak Club de Feins</b>.</p>
                <p class="hidden md:block mb-4">Quelle est la différence entre un <b class="text-black">canoë</b> et un <b class="text-black">kayak</b> ? Ça commence comme une mauvaise blague, et pourtant il existe une vraie différence !</p>
    			<p class="mb-4">Il était une fois une bande de <b class="text-black">riders</b> un peu fous. L'histoire commence en l'an 2010 et n'est toujours pas terminée ! Leur camp-base est actuellement établi à l'<b class="text-black">étang de Feins</b>, mais il est possible de les croiser sur n'importe quelle vague de France et de Navarre. La bande s'agrandit de jour en jour, et est accessible pour les plus petits comme les plus grands.</p>
                <p class="mb-4">Bonne visite !</p>
                <p class="hidden md:block">
                    P.S. : au fait, un kayak se pratique avec une pagaie à double pales, alors qu'un canoë seulement avec une pagaie à pale simple.</p>
    		</div>
    	</section>
    	<Section title="Activités" index={2}>
    		Pour une pratique de loisir, le kayak est une activité qui ne demande pas d’habileté ou de force. On est porté par le bateau. Il y a de nombreuses sortes d’embarcation qui permettent de varier les plaisirs et les raisons de s’amuser.
			La vie du club est répartie sur différents centres d’intérêts.
			Le <b class="text-black">groupe loisir</b> qui se caractérise par une pratique non compétitive du Kayak, et constitue l’âme familiale du club, actif principalement sur des sorties fréquentes en mer ou rivières.
			L’<b class="text-black">école de pagaie</b> où chacun peut parfaire sa maîtrise de la navigation des bases au niveau compétitif, avec d’autres membres et des moniteurs assermentés.
            Le <b class="text-black">groupe polo</b> qui participe aux compétitions régionales et nationales de Kayak-Polo, sport d’équipe au ballon.
            Et de nombreuses rencontres et évènements au fil de l’année.
    	</Section>
    	<Section title="Infos pratiques" index={3}>
    		<p>Deux séance sont ouverte au public chaque semaine.</p>
            <ul class="list-disc list-inside my-2">
                <li>Le <b class="text-black">Mercredi</b> de 14h à 17h</li>
                <li>Le <b class="text-black">Samedi</b> de 14h à 17h</li>
            </ul>
			<p class="mb-6">Le club vit grâce à l’implication de ses adhérents. Ces horaires sont donc variables. Il peut être ouvert à d’autres moments selon les présences. Celle-ci seront communiquer sur l'<b class="text-black">espace adhérents</b> du club</p>

            <p>Le prix de l’<b class="text-black">adhésion</b> est différent selon l’âge et l'autonomie sur l'eau :</p>
			<ul class="list-disc list-inside my-2">
				<li>165 € pour les enfants</li>
				<li>172 € pour les adultes</li>
			</ul>
				<p class="mt-6">L’adhésion nécessite quelques documents :</p>
				<ul>
					<li>Le formulaire d’adhésion à télécharger</li>
					<li>Un certificat médical (utilisez le modèle fourni avec le formulaire d’adhésion)</li>
					<li>Un certificat de test anti-panique délivré en piscine</li>
				</ul>
				<a href="" class="mt-6 py-2 px-3 bg-blue-500 rounded block">Télécharger le dossier d'adhésion</a>
    	</Section>
    	<Section title="Photos" index={4}>
            <div class="flex flex-row md:flex-row">
                <div class="w-2/3 h-xl">
                    <div style={{backgroundImage: `url('/img/photos_1.jpeg')`}} class="bg-cover bg-center h-1/3 mb-4"></div>
                    <div style={{backgroundImage: `url('/img/photos_3.jpeg')`}} class="bg-cover bg-center h-2/3"></div>    
                </div>
                <div class="w-1/3 ml-4">
                    <div style={{backgroundImage: `url('/img/photos_2.jpeg')`}} class="bg-cover bg-center h-1/2 mb-4" />
                    <div style={{backgroundImage: `url('/img/photos_4.jpeg')`}} class="bg-cover bg-center h-1/2" />
                </div>
            </div>
    	</Section>
        <Section title="Retrouvez nos actualités" index={5}>
        </Section>
        <Section title="Contact" index={6}>
        </Section>
        <Section title="Merci à tous nos partenaires" index={7}>
        </Section>
    </div>
  )
}
