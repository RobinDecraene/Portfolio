import React, { useEffect, useState } from 'react';
import style from './project.module.css';
import Page from '../Page/page';
import Section from '../Section/section';
import SmallList from '../list/smalllist';
import Title from '../Title/title';
import { Link, useParams } from 'react-router-dom';
import ROUTES from '../../Routes/routes';
import { FaArrowLeft } from "react-icons/fa";
import LinkButton from '../Button/linkbutton';
import { firebase } from '../../firebase';
import Slider from '../Slider/imageSlider';

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        let doc = await firebase.firestore().collection('websites').doc(id).get();
        let collection = 'websites';
        if (!doc.exists) {
          doc = await firebase.firestore().collection('designs').doc(id).get();
          collection = 'designs';
        }
        if (!doc.exists) {
          doc = await firebase.firestore().collection('other').doc(id).get();
          collection = 'other';
        }
        if (doc.exists) {
          const projectData = doc.data();
          setProject(projectData);

          const imagePath = `Projects/${collection}/${doc.id}`;
          const storageRef = firebase.storage().ref(imagePath);
          const imageRefs = await storageRef.listAll();

          const imageUrls = await Promise.all(
            imageRefs.items.map(async (item) => {
              const url = await item.getDownloadURL();
              return {
                url: url
              };
            })
          );

          setImages(imageUrls);
        } else {
          console.log('No such document in any collection!');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Page>
      <Section>
        <Link to={ROUTES.projects} className={style.arrow}>
          <FaArrowLeft size={25} color='#1B263B' />
        </Link>
        {images.length > 1 ? (
          <div className={style.sliderWidth}>
            <Slider slides={images} />
          </div>
        ) : images.length === 1 ? (
          <div className={style.sliderWidth}>
            <div className={style.singleImage} style={{ backgroundImage: `url(${images[0].url})` }}>
            </div>
          </div>

        ) : (
          <div className={style.sliderWidth}>
            <img src={''} alt='No Images Available' />
          </div>
        )}

      </Section>

      <Section>
        <div className={style.description}>
          <Title>{project.title}</Title>
          <p>{project.description}</p>
        </div>

        <div className={style.other}>
          {project.programming ? (
            <>
              <Title>Programmeertalen</Title>
              {project.programming.map((programming, index) => (
                <SmallList key={index} color={'#8699B2'} customClass={style.color}>
                  {programming}
                </SmallList>
              ))}
            </>
          ) : project.colors ? (
            <>
              <Title>Kleurenpalet</Title>
              {project.colors.map((color, index) => (
                <SmallList key={index} color={'#8699B2'} customClass={style.color}>
                  {color}
                </SmallList>
              ))}
            </>
          ) : null}

          {project.website ? (
            <LinkButton link={project.website}>Website</LinkButton>
          ) : project.github ? (
            <LinkButton link={project.github}>Github</LinkButton>
          ) : null}
        </div>
      </Section>
    </Page>
  );
};

export default Project;
