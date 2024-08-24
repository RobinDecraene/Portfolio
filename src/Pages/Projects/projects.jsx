import React, { useEffect, useState } from 'react';
import style from './projects.module.css';
import Title from '../../Components/Title/title';
import Page from '../../Components/Page/page';
import { firebase } from '../../firebase';

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
          websitesArray.push(doc.data());
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
          designsArray.push(doc.data());
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
          otherArray.push(doc.data());
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
        {websites.map((index) => (
          <div className={style.card} key={index}>
            <p>Title</p>
          </div>
        ))}
      </div>

      <Title>Designs</Title>
      <div className={style.cards}>
        {designs.map((index) => (
          <div className={style.card} key={index}>
            <p>Title</p>
          </div>
        ))}
      </div>

      <Title>Other</Title>
      <div className={style.cards}>
        {other.map((index) => (
          <div className={style.card} key={index}>
            <p>Title</p>
          </div>
        ))}
      </div>

    </Page>
  );
};

export default Projects;