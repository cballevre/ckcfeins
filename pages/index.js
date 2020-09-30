import Head from 'next/head'
import Intro from '../components/intro'
import Content from '../components/content'
import Footer from '../components/footer'

import React from 'react'
import ReactMarkdown from 'react-markdown'



export default class Home extends React.Component {

    static async getInitialProps({ req }) {
        const intro = await require(`../contents/intro.md`);
        const activiy = await require(`../contents/activity.md`);
        const infos = await require(`../contents/infos.md`);
        const actuality = await require(`../contents/actuality.md`);
        const contact = await require(`../contents/contact.md`);

        return { intro, activiy, infos, actuality, contact }
    }

    render() {
        return (
            <div>
                <Intro>
                    <ReactMarkdown source={this.props.intro.default} />
                </Intro>
                <Content 
                    title="Activités"
                    index={2}>
                    <ReactMarkdown source={this.props.activiy.default} />
                </Content>
                <Content 
                    title="Infos pratiques" 
                    index={3}>
                    <ReactMarkdown source={this.props.infos.default} />
                </Content>
                <Content title="Photos" 
                    index={4}>
                    <div className="flex h-64 w-full overflow-x-auto md:overflow-x-hidden">
                        <img src="/img/photos_1.jpeg" alt=""  className='h-full'/>
                        <img src="/img/photos_3.jpeg" alt=""  className='h-full ml-6'/>
                        <img src="/img/photos_2.jpeg" alt="" className='h-full ml-6'/>
                        <img src="/img/photos_4.jpeg" alt="" className='h-full ml-6'/>
                    </div>
                </Content>
                <Footer 
                    title="Retrouvez nos actualités" 
                    index={5}>
                    <ReactMarkdown source={this.props.actuality.default} />
                </Footer>
                <Footer 
                    title="Contact" 
                    index={6}>
                    <ReactMarkdown source={this.props.contact.default} />
                </Footer>
                <Footer 
                    title="Merci à tous nos partenaires" 
                    index={7}>
                    <div className="flex h-24 w-full overflow-x-auto">
                        <img src="/img/ffck.png" alt="Logo de la Fédération française de canoë-kayak"  className='h-full'/>
                        <img src="/img/ille&vilaine.jpg" alt="Logo du Département d'Ille-et-Vilaine"  className='h-full ml-6'/>
                        <img src="/img/val_dille_aubigne.png" alt="Logo de la Communauté de communes Val d'Ille-Aubigné" className='h-full ml-6'/>
                    </div>
                </Footer>
            </div>
        );
    }
}