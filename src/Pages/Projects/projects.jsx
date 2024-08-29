import React, { useEffect, useState } from 'react';
import style from './projects.module.css';
import Title from '../../Components/Title/title';
import Page from '../../Components/Page/page';
import { firebase } from '../../firebase';
import Card from '../../Components/Card/card';

const Projects = () => {
  const [websites, setWebsites] = useState([]);
  const [designs, setDesigns] = useState([]);
  const [other, setOther] = useState([]);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('websites').get();
        const websitesArray = [];
        querySnapshot.forEach((doc) => {
          websitesArray.push({ id: doc.id, ...doc.data() });
        });
        setWebsites(websitesArray);
      } catch (error) {
        console.error('Error getting documents:', error);
      }
    };
  
    fetchWebsites();
  
    const fetchDesigns = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('designs').get();
        const designsArray = [];
        querySnapshot.forEach((doc) => {
          designsArray.push({ id: doc.id, ...doc.data() });
        });
        setDesigns(designsArray);
      } catch (error) {
        console.error('Error getting documents:', error);
      }
    };
  
    fetchDesigns();
  
    const fetchOther = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('other').get();
        const otherArray = [];
        querySnapshot.forEach((doc) => {
          otherArray.push({ id: doc.id, ...doc.data() });
        });
        setOther(otherArray);
      } catch (error) {
        console.error('Error getting documents:', error);
      }
    };
  
    fetchOther();
  }, []);

  return (
    <Page>
      <Title>Websites</Title>
      <div className={style.cards}>
        {websites.map((website, index) => (
          <Card key={index} link={`/detail/${website.id}`}>
            <p>{website.title}</p>
          </Card>
        ))}
      </div>

      <Title>Designs</Title>
      <div className={style.cards}>
        {designs.map((design, index) => (
          <Card key={index} link={`/detail/${design.id}`}>
            <p>{design.title}</p>
          </Card>
        ))}
      </div>

      <Title>Other</Title>
      <div className={style.cards}>
        {other.map(( other, index) => (
          <Card key={index} link={`/detail/${other.id}`}>
            <p>{other.title}</p>
          </Card>
        ))}
      </div>

    </Page>
  );
};

export default Projects;