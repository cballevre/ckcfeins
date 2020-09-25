import Head from 'next/head'

export default function Home() {
  return (
    <div>
    	<section class="p-6 flex flex-col md:flex-row">
    		<div class="w-2/4 max-w-screen-sm">
    			<img src="logo.jpg" alt="Le logo du Canoë Kayak Club de Feins"/>
    			<h1>Canoë Kayak Club de Feins</h1>
    		</div>
    		<div class="w-2/4 max-w-screen-sm">
    			<p class="text-xl leading-normal">Bienvenue sur le site du Canoë Kayak Club de Feins.<br/><br/>
    			sur la page Facebook officiel du CKCIR (Canoë kayak club de l'île de Robinson) Ici vous pourrez suivre les différentes activités du club (jeunes, loisir, kayak polo et course en ligne) via les photos, post et articles que nous publions régulièrement<br/><br/>
    			Bonne visite !</p>
    			<a href="#infos-pratiques" class="mt-6 py-2 px-3 bg-blue-500 rounded">Accès rapide aux infos pratique</a>
    		</div>
    	</section>
    	<section class="pb-12 p-6 bg-orange-100 flex flex-col md:flex-row">
    		<div class="w-1/4 max-w-screen-sm">
    			<h2 class="text-xl">Activités</h2>
    		</div>
    		<div class="w-3/4 max-w-screen-sm text-lg">
    			<div>
    				<p class="mb-6">Pour une pratique de loisir, le kayak est une activité qui ne demande pas d’habileté ou de force. On est porté par le bateau. Il y a de nombreuses sortes d’embarcation qui permettent de varier les plaisirs et les raisons de s’amuser.</p>
					<p class="mb-2">La vie du club est répartie sur différents centres d’intérêts.</p>
    			</div>
				<div>
					<div class="mt-4 pt-4 border-t">
						<p>Le <b>groupe loisir</b> qui se caractérise par une pratique non compétitive du Kayak, et constitue l’âme familiale du club, actif principalement sur des sorties fréquentes en mer ou rivières.</p>
					</div>
					<div class="mt-4 pt-4 border-t">
						L’<b>école de pagaie</b> où chacun peut parfaire sa maîtrise de la navigation des bases au niveau compétitif, avec d’autres membres et des moniteurs assermentés.</div>
					<div class="mt-4 pt-4 border-t">
						Le <b>groupe polo</b> qui participe aux compétitions régionales et nationales de Kayak-Polo, sport d’équipe au ballon.</div>
				</div>
				<p>Et de nombreuses rencontres et évènements au fil de l’année.</p>
    		</div>
    	</section>
    	<section id="infos-pratiques" class="pb-12 p-6 flex flex-col md:flex-row">
    		<div class="w-2/4 max-w-screen-sm">
    			<h2 class="text-xl">Infos pratiques</h2>
    		</div>
    		<div class="w-2/4 max-w-screen-sm text-lg">
    			<p>
    				du Lundi au Vendredi de 10h à 18h00<br/>
    				Le Samedi de 9h à 17h30<br/><br/>
					Le club vit grâce à l’implication de ses adhérents. Ces horaires sont donc variables. Il peut être ouvert à d’autres moments selon les présences.<br/><br/></p>
				<p>Le prix de l’adhésion est différent selon l’âge :</p>
				<ul>
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
    		</div>
    	</section>
    	<section class="pb-12 p-6 bg-orange-100 flex flex-col md:flex-row">
    		<div class="w-2/4 max-w-screen-sm">
    			<h2 class="text-xl">Photos</h2>
    		</div>
    		<div class="w-2/4 max-w-screen-sm">
    			
    		</div>
    	</section>
    	<section class="pb-12 p-6 flex flex-col md:flex-row">
    		<div class="w-2/4 max-w-screen-sm">
    			<h2 class="text-xl">Retrouvez nos actualités</h2>
    		</div>
    		<div class="w-2/4 max-w-screen-sm">
    			
    		</div>
    	</section>
    	<section class="pb-12 p-6 bg-orange-100 flex flex-col md:flex-row">
    		<div class="w-2/4 max-w-screen-sm">
    			<h2 class="text-xl">Contact</h2>
    		</div>
    		<div class="w-2/4 max-w-screen-sm">
    			
    		</div>
    	</section>
    	<section class="pb-12 p-6 flex flex-col md:flex-row">
    		<div class="w-2/4 max-w-screen-sm">
    			<h2 class="text-xl">Merci à tous nos partenaires</h2>
    		</div>
    		<div class="w-2/4 max-w-screen-sm">
    			
    		</div>
    	</section>
    	<footer>
    		
    	</footer>
    </div>
  )
}
