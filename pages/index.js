import Head from 'next/head'
import Section from '../components/section'
import ReactMarkdown from 'react-markdown'

export default function Home() {

    const test = `# This is a header
    And this is a paragraph`;

    const header = [
        "Bienvenue sur le site du **Canoë Kayak Club de Feins**.",
        "Quelle est la différence entre un **canoë** et un **kayak** ? Ça commence comme une mauvaise blague, et pourtant il existe une vraie différence !",
        "Il était une fois une bande de **riders** un peu fous. L'histoire commence en l'an 2010 et n'est toujours pas terminée ! Leur camp-base est actuellement établi à l'**étang de Feins**, mais il est possible de les croiser sur n'importe quelle vague de France et de Navarre. La bande s'agrandit de jour en jour, et est accessible pour les plus petits comme les plus grands.",
        "Bonne visite !",
        "P.S. : au fait, un kayak se pratique avec une pagaie à double pales, alors qu'un canoë seulement avec une pagaie à pale simple."].join('\n');

    const activiy = ``;
    const infos = ``;
    const actuality = ``;
    const contact = ``;

    return (
        <div>
            <Section 
                title="Canoë Kayak Club de Feins"
                index={1}>
                <ReactMarkdown source={header} />
            </Section>
        	<Section 
                title="Activités"
                index={2}>
                <ReactMarkdown>
                    Pour une pratique de loisir, le kayak est une activité qui ne demande pas d’habileté ou de force. On est porté par le bateau. Il y a de nombreuses sortes d’embarcation qui permettent de varier les plaisirs et les raisons de s’amuser. 

                    La vie du club est répartie sur différents centres d’intérêts. 

                    Le groupe loisir qui se caractérise par une pratique non compétitive du Kayak, et constitue l’âme familiale du club, actif principalement sur des sorties fréquentes en mer ou rivières. 

                    L’école de pagaie où chacun peut parfaire sa maîtrise de la navigation des bases au niveau compétitif, avec d’autres membres et des moniteurs assermentés. 

                Le groupe polo qui participe aux compétitions régionales et nationales de Kayak-Polo, sport d’équipe au ballon. 

    Et de nombreuses rencontres et évènements au fil de l’année.
                </ReactMarkdown>
            </Section>
        	<Section 
                title="Infos pratiques" 
                index={3}>
                <ReactMarkdown>
                    Deux séance sont ouverte au public chaque semaine.

                    Le Mercredi de 14h à 17h
                    Le Samedi de 14h à 17h
                    Le club vit grâce à l’implication de ses adhérents. Ces horaires sont donc variables. Il peut être ouvert à d’autres moments selon les présences. Celle-ci seront communiquer sur l'espace adhérents du club

                    Le prix de l’adhésion est différent selon l’âge et l'autonomie sur l'eau :

                    165 € pour les enfants
                    172 € pour les adultes
                    L’adhésion nécessite quelques documents :

                    Le formulaire d’adhésion à télécharger
                    Un certificat médical (utilisez le modèle fourni avec le formulaire d’adhésion)
                    Un certificat de test anti-panique délivré en piscine
                    Télécharger le dossier d'adhésion
                </ReactMarkdown>
            </Section>
        	<Section title="Photos" 
                index={4}>
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
            <Section 
                title="Retrouvez nos actualités" 
                index={5}>
                <ReactMarkdown source='
                    * [test] (http:://url.test)

                    * [test] (http:://url.test)

                    * [test] (http:://url.test)
                    * Facebook [https://www.facebook.com/ckcfeins/]
    * Instagram [https://www.instagram.com/ckcfeins/]
    * Flickr [https://www.flickr.com/photos/143416748@N08/]
                ' />
            </Section>
            <Section 
                title="Contact" 
                index={6}>
                <ReactMarkdown source='* Mail : ckcf@laposte.net * Tél : +33 6 30 17 00 69 * Adresse : La Bijouterie - 35440 Feins, France'
                />
            </Section>
            <Section 
                title="Merci à tous nos partenaires" 
                index={7}>
                <ReactMarkdown source={test} />
            </Section>
        </div>
    )
}
