import Head from 'next/head'
import Section from '../components/section'

import React from 'react'
import ReactMarkdown from 'react-markdown'



export default class Home extends React.Component {

    static async getInitialProps({ req }) {
        const header = await require(`../contents/header.md`);
        const activiy = await require(`../contents/activity.md`);
        const infos = await require(`../contents/infos.md`);
        const actuality = await require(`../contents/actuality.md`);
        const contact = await require(`../contents/contact.md`);
        return { header, activiy, infos, actuality, contact }
    }

    render() {
        return (
            <div>
                <Section 
                    title="Canoë Kayak Club de Feins"
                    index={1}>
                    <ReactMarkdown source={this.props.header.default} />
                </Section>
                <Section 
                    title="Activités"
                    index={2}>
                    <ReactMarkdown source={this.props.activiy.default} />
                </Section>
                <Section 
                    title="Infos pratiques" 
                    index={3}>
                    <ReactMarkdown source={this.props.infos.default} />
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
                <ReactMarkdown source={this.props.actuality.default} />
            </Section>
            <Section 
                title="Contact" 
                index={6}>
                <ReactMarkdown source={this.props.contact.default} />
            </Section>
            <Section 
                title="Merci à tous nos partenaires" 
                index={7}>
                
            </Section>
        </div>
        );
    }
}